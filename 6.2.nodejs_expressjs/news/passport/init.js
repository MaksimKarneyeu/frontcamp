const login = require('./login');
const signup = require('./signup');
const facebook = require('./facebook');
const User = require('../models/user-model');

module.exports = function(passport){

    passport.serializeUser(function(user, done) {
        console.log('serializing user: ');
        console.log(user);
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            console.log('deserializing user:',user);
            done(err, user);
        });
    });
   
    facebook(passport);
    login(passport);
    signup(passport);
}