let express = require('express');
let router = express.Router();
let newsData = require('..//news');
let mongoose = require('mongoose');

let mongoDB = 'mongodb://127.0.0.1:27017/news';
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

const News = mongoose.model('News', newsSchema);

News.findOne({}, function (err, newsItem) {
  if (!newsItem) {
    News.collection.insertMany(newsData, check_keys = False);
  }
});

router.get('/', function (req, res, next) {
  News.find({}, function (err, newsItems) {
    res.send(newsItems);
  });
});

router.get('/:id', function (req, res, next) {
  let id = req.params.id;
  // following three lines are needed for testing purpose
  if (id === 'error') {
    throw new Error("Test ERROR OCCURS!");
  }

  News.findOne({ 'source.id': id }, function (err, newsItem) {
    if (!newsItem) {
      res.status(404);
      res.send(`Resource with ${id} id is not found.`);
    } else {
      res.send(newsItem);
    }
  });
});

router.post('/', function (req, res, next) {
  News.collection.insert(req.body);
  res.sendStatus(201);
});

router.put('/:id', function (req, res, next) {
  let id = req.params.id;

  News.findOneAndReplace({ 'source.id': id }, req.body, function (err) {
    if (err) {
      res.send(500, { error: err });
    }
    else { res.sendStatus(204); }
  });

});

router.delete('/:id', function (req, res, next) {
  let id = req.params.id;

  News.remove({ 'source.id': id }, function (err) {
    if (!err) {
      res.status(404);
      res.send(`Resource with ${id} id is not found.`)
    }
    else {
      res.send(`${id} has been deleted.`);
    }
  });
});


module.exports = router;
