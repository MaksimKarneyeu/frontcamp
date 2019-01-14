let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let news = require('./news');
let expressWinston = require('express-winston');
let winston = require('winston');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();
let router = express.Router();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: 'info.log',
        level: 'info'
      })
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    )
  }));

  app.use(router);

  app.use(expressWinston.errorLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: 'error.log',
        level: 'error'
      })
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()      
    )
  })); 


app.get('/news', function( req, res, next ) {
    res.json(news);
});

app.get('/news/:id',function(req, res, next) {
    res.send(news.articles[req.params.id]);
});

app.post('/news/', function(req, res, next) {
    res.send(news.articles[req.body.id]);
});

app.put('/news/',function (req, res, next)  { 
    let id = req.body.id;
    news.articles[id] = req.body;    
    res.send(news.articles[id]);
});

app.delete('/news/', function(req, res, next)  {   
    let id = req.body.id;
    delete news.articles[id] 
    res.send(`${id} has been deleted.`);
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(err,req,res,next) {
    console.log(err.stack);
    res.status(500).send({"Error" : err.stack});
  });

module.exports = app;
