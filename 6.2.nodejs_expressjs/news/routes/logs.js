let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let mongoDB = 'mongodb://127.0.0.1:27017/logs-db';
mongoose.connect(mongoDB, { useNewUrlParser: true });

let connection = mongoose.connection;

router.get('/', function (req, res, next) {
    connection.db.collection("error_logger", function(err, collection){
      collection.find({}).toArray(function(err, data){
        res.send(data);  
      })
  });
  });

module.exports = router;