let express = require('express');
let router = express.Router();
let newsData = require('..//news');
let mongoose = require('mongoose');
let News = require('../models/news-model');
let dbConfig = require('../db');

mongoose.connect(dbConfig.url, { useNewUrlParser: true });

const isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}

//startup re-init testdata
News.findOne({}, function (err, newsItem) {
  mongoose.connection.db.dropCollection('news');
  News.collection.insertMany(newsData);
});

router.get('/', function (req, res, next) {
  News.find({}, function (err, newsItems) {
    res.send(newsItems);
  });
});

router.get('/:id', function (req, res, next) {
  let id = req.params.id;

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

router.put('/:id', isAuthenticated, function (req, res, next) {
  let id = req.params.id;

  News.findOneAndReplace({ 'source.id': id }, req.body, function (err) {
    if (err) {
      res.send(500, { error: err });
    }
    else { res.sendStatus(204); }
  });

});

router.delete('/:id', isAuthenticated, function (req, res, next) {
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