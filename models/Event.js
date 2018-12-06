module.exports = function(sequelize , Datatypes) {
    var event = sequelize.define("Event" , {
        name : Datatypes.STRING,
        location : Datatypes.STRING,
        date : Datatypes.DATE,
        creator_id : Datatypes.INTEGER,
        interested : Datatypes.INTEGER,
        category : Datatypes.STRING,
        description : Datatypes.STRING
    });

    event.sync();
    return event;
};