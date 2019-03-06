let mongoose = require('mongoose');

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
    imageBase64: ArrayBuffer | String,
    publishedAt: Date,
    content: String
  });

module.exports = mongoose.model('News', newsSchema);