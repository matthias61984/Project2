var passport = require("passport"), LocalStrategy = require('passport-local').Strategy;

var db = require("./models");

passport.use( new LocalStrategy( function(username , password , done) {
    db.User.findOne({username : username} , function(err , user) {
        if(err) {return(err);}
        if(!user)
        {
           return done(null , false , {message : "Incorrect Username"}); 
        }

        if(!user.validPassword(password)) {
          return done(null , false , {message : "Incorrect Password"});  
        }

        return done(null , user);
    });
}));


module.exports = passport;