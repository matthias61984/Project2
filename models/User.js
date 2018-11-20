module.exports = function(sequilize , Datatypes ) {
    var User = sequilize.define("user" , {
        username : Datatypes.STRING,
        password : Datatypes.STRING,
    });
    return User;
}