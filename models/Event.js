module.exports = function(sequilize , Datatypes) {
    var event = sequilize.define("event" , {
        name : Datatypes.STRING,
        location : Datatypes.STRING,
        date : Datatypes.DATE,
        creator_id : Datatypes.INTEGER,
        interested : Datatypes.STRING,
        category : Datatypes.STRING
    });

    return event;
};