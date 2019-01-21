let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let news = require('./news');
let expressWinston = require('express-winston');
let winston = require('winston');
let indexRouter = require('./routes/index');
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

app.get('/news', function (req, res, next) {
  res.json(news);
});

app.get('/news/:id', function (req, res, next) {
  let id = req.params.id;
  // following three lines are needed for testing purpose
  if (id === 'error') {
    throw new Error("Test ERROR OCCURS!");
  }
  if(typeof news.articles[id] === 'undefined'){
    res.status(404);
    res.send(`Resource with ${id} id is not found.`)
  }
  res.send(news.articles[req.params.id]);
});

app.post('/news/create/', function (req, res, next) {  
  news.articles.push(req.body);
  res.sendStatus(201);
});

app.put('/news/update/:id', function (req, res, next) {
  let id = req.params.id;
  if(typeof news.articles[id] === 'undefined'){
    res.status(404);
    res.send(`Resource with ${id} id is not found.`)
  }
  news.articles[id] = req.body;
  res.sendStatus(204);
});

app.delete('/news/delete/:id', function (req, res, next) {
  let id = req.params.id;
  if(typeof news.articles[id] === 'undefined'){
    res.status(404);
    res.send(`Resource with ${id} id is not found.`)
  }
  delete news.articles[id]
  res.send(`${id} has been deleted.`);
});

app.use('/', indexRouter);

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send(err.message)
});

module.exports = app;
