var express = require("express");
var session = require("express-session");

var passport = require("passport");

var app = express();

var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded( { extended : true}));
app.use(express.json());
app.use(session({ secret: "pikachu" }));
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());


require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});