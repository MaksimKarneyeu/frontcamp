let express = require('express');
let router = express.Router();
let newsData = require('..//news');
let mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1:27017/news';
mongoose.connect(mongoDB, { useNewUrlParser: true });

const newsSchema = new mongoose.Schema({
  source: {
    id: String,
    name: String
  },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: Date,
  content: String
});

const News = mongoose.model('News', newsSchema );

//To initialize when the News collection is empty
News.findOne({},function(err,newsItem){
  if(!newsItem){
     //Collection is empty
     News.collection.insertMany(newsData);    
  }
});

router.get('/', function (req, res, next) {
  News.find({}, function(err, newsItems) {  
    res.send(newsItems);  
  });
});

router.get('/:id', function (req, res, next) {
  let id = req.params.id;
  // following three lines are needed for testing purpose
  if (id === 'error') {
    throw new Error("Test ERROR OCCURS!");
  }
  if (typeof news.articles[id] === 'undefined') {
    res.status(404);
    res.send(`Resource with ${id} id is not found.`)
  }
  res.send(news.articles[req.params.id]);
});

router.post('/', function (req, res, next) {
  news.articles.push(req.body);
  res.sendStatus(201);
});

router.put('/:id', function (req, res, next) {
  let id = req.params.id;
  if (typeof news.articles[id] === 'undefined') {
    res.status(404);
    res.send(`Resource with ${id} id is not found.`)
  }
  news.articles[id] = req.body;
  res.sendStatus(204);
});

router.delete('/:id', function (req, res, next) {
  let id = req.params.id;
  if (typeof news.articles[id] === 'undefined') {
    res.status(404);
    res.send(`Resource with ${id} id is not found.`)
  }
  delete news.articles[id]
  res.send(`${id} has been deleted.`);
});

module.exports = router;
