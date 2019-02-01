let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let dbConfig = require('../db');

mongoose.connect(dbConfig.url, { useNewUrlParser: true });

let connection = mongoose.connection;

router.get('/', function (req, res, next) {
    connection.db.collection("error_logger", function (err, collection) {
        collection.find({}).toArray(function (err, data) {
            res.send(data);
        })
    });
});

module.exports = router;