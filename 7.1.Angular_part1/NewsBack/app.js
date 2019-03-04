let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
var favicon = require('static-favicon');
let logger = require('morgan');
let newsRouter = require('./routes/news');
let logsRouter = require('./routes/logs')
let app = express();
let router = express.Router();
let bodyParser = require('body-parser');
let mongooseMorgan = require('mongoose-morgan');
let dbConfig = require('./db');
let passport = require('passport');
let expressSession = require('express-session');
let flash = require('connect-flash');

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
app.use(allowCrossDomain);  

app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(mongooseMorgan({
  collection: 'error_logger',
  connectionString: dbConfig.url
 },
 {
  skip: function (req, res) {
      return res.statusCode < 400;
  }
 },
 'dev'
));



app.use(flash());

// Initialize Passport
let initPassport = require('./passport/init');
initPassport(passport);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broken!')
});

app.use(router);

var routes = require('./routes/index')(passport);
app.use('/', routes);
app.use('/news', newsRouter);
app.use('/logs', logsRouter);

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send(err.message)
});

module.exports = app;
