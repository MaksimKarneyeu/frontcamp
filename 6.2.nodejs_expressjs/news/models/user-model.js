let mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
      email: String,
      gender: String,
      address: String
  });

module.exports = mongoose.model('User', userSchema);