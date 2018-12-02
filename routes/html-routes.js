var path = require("path");

var passport = require("../authorization.js");

module.exports = function(app) {
    app.get("/" , function(req , res) {
        res.sendFile(path.join(__dirname , "../public/index.html"));
    });

    app.post("/" , passport.authenticate("local" , {
        successRedirect : "/events/" + user.id,
        failureRedirect : "/userCreation",
        failureFlash : true
    }));

    app.get("/userCreation", function(req , res) {
        res.sendFile(path.join(__dirname , "../public/userCreation.html"));
    });
}