module.exports = function (sequelize, DataTypes) {


    var Attend = sequelize.define("attend", {
        stud_name: Sequelize.STRING,
        class: Sequelize.STRING,
        created_at: Sequelize.DATE,
    })

    return Attend;

}