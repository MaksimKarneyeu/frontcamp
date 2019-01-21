let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let expressWinston = require('express-winston');
let winston = require('winston');
let indexRouter = require('./routes/index');
let newsRouter = require('./routes/news')
let app = express();
let router = express.Router();
var bodyParser = require('body-parser')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;
const myFormat = printf(info => {
  return `${info.timestamp} ${info.message}`;
});

app.use(expressWinston.logger({
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'info.log',
      level: 'info'
    })
  ]
}));

app.use(router);

app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console(),
  ],
  format: combine(
    timestamp(),
    myFormat
  )
}));

app.use('/', indexRouter);
app.use('/news', newsRouter);

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send(err.message)
});

module.exports = app;
