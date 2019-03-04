const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/user-model');

module.exports = function(passport){
	
    passport.use('facebook', new FacebookStrategy({
        clientID: "525128454676798",
        clientSecret:"1172e066f3132b0107040eb0d1c09cb4",
        callbackURL: "http://127.0.0.1:3000/auth/facebook/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({name: profile.displayName}, {name: profile.displayName,userid: profile.id}, function(err, user) {
            if (err) { return done(err); }
            done(null, user);
          });
      }
    ));
}  