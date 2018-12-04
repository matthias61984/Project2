module.exports = function(sequelize , Datatypes ) {
    var User = sequelize.define("User" , {
        username : Datatypes.STRING,
        password : Datatypes.STRING,
    });

    User.sync();
    return User;
}