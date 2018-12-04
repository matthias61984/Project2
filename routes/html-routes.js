var path = require("path");

var passport = require("../authorization.js");

module.exports = function(app) {
    app.get("/" , function(req , res) {
        res.sendFile(path.join(__dirname , "../public/index.html"));
    });

    app.post("/login" , passport.authenticate("local" , {
        successRedirect : "/events",
        failureRedirect : "/createuser",
    }));

    app.get("/createuser", function(req , res) {
        res.sendFile(path.join(__dirname , "../public/createuser.html"));
    });

    app.get("/addevent" , function(req, res) {
        res.sendFile(path.join(__dirname , "../public/addevent.html"));
    });

    app.get("/forgot" , function(req , res) {
        res.sendFile(path.join(__dirname , "../public/forgot.html"));
    });

    app.get("/events" , function(req , res) {
        res.sendFile(path.join(__dirname , "../public/events.html"));
    });
}