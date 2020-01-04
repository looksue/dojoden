module.exports = function (sequelize, DataTypes) {


    var Attend = sequelize.define("attend", {
        stud_name: DataTypes.STRING,
        class: DataTypes.STRING,
        created_at: DataTypes.DATE,
    })

    return Attend;

}