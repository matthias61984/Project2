module.exports = function(sequelize , Datatypes ) {
    var User = sequelize.define("user" , {
        username : Datatypes.STRING,
        password : Datatypes.STRING,
    });
    return User;
}