var db = require("../models");


module.exports = function(app) {
    app.get("/api/users" , function(req , res) {
        db.User.findAll({}).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.get("/api/events" , function(req , res) {
        db.Event.findAll({}).then(function(dbEvent) {
            res.json(dbEvent);
        });
    });

    app.post("/api/user" , function(req , res) {
        db.User.create({
            username : req.body.username,
            password : req.body.password
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.post("/api/events" , function(req , res) {
        db.Event.create({
            name : req.body.name,
            location : req.body.location,
            date : req.body.date,
            creator_id : req.body.creator_id,
            interested : req.body.interested,
            category : req.body.category
        }).then(function(dbEvents) {
            res.json(dbEvents);
        });
    });

    app.delete("/api/users/:id" , function(req , res) {
        db.User.destroy({
            where : {
                id: req.params.id
            }
        }).then(function(dbEvent) {
            res.json(dbEvent);
        });
    });

    app.delete("/api/events/:id" , function(req , res) {
        db.Event.destroy({
            where : {
                id : req.params.id
            }
        }).then(function (dbEvent) {
            res.json(dbEvent);
        });
    });

    app.update("/api/users/" , function(req , res) {
        db.User.update({
            username : req.body.username,
            password : req.body.password
        } ,{ 
            where : {
                id : req.body.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.update("/api/events" , function(req , res) {
        db.Event.update({
            name : req.body.name,
            location : req.body.location,
            date : req.body.date,
            creator_id : req.body.creator_id,
            interested : req.body.interested,
            category : req.body.category
        } , {
            where : {
                id : req.body.id
            }
        });
    }).then(function(dbEvent) {
        res.json(dbEvent);
    });
}