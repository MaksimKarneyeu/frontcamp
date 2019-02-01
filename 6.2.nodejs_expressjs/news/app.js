let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let indexRouter = require('./routes/index');
let newsRouter = require('./routes/news');
let logsRouter = require('./routes/logs')
let app = express();
let router = express.Router();
let bodyParser = require('body-parser');
let mongooseMorgan = require('mongoose-morgan');

app.use(mongooseMorgan({
  collection: 'error_logger',
  connectionString: 'mongodb://localhost:27017/logs-db'
 },
 {
  skip: function (req, res) {
      return res.statusCode < 400;
  }
 },
 'dev'
));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.use(router);



app.use('/', indexRouter);
app.use('/news', newsRouter);
app.use('/logs', logsRouter);

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send(err.message)
});

module.exports = app;
