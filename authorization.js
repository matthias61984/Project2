var passport = require("passport"), LocalStrategy = require('passport-local').Strategy;

var db = require("./models");

passport.use( new LocalStrategy( function(username , password , done) {
    console.log("username " + username);
    console.log("password " + password);

    db.User.findOne({where : {username : username}}).then(function(user , err) {
        console.log("Running");
        if(err) {console.log("pls god " + JSON.stringify(err)); return(err);}
        if(!user)
        {
            console.log("None");
           return done(null , false , {message : "Incorrect Username"}); 
        }

        if(!(user.password === password)) {
            console.log("invalid password" + user);
          return done(null , false , {message : "Incorrect Password"});  
        }

        console.log("found user" + user);
        passport.serializeUser(function(user , done ) {
            done(null , user.id);
        })
        passport.deserializeUser(function(id, done) {
            db.User.findById(id).then(function(user, err) {
            if(err) {console.log("error is " + JSON.stringify(err));}
            console.log("Stringified " +JSON.stringify(user));
              done(err, user);
            });
          });
        return done(null , user);
    });
}));


module.exports = passport;