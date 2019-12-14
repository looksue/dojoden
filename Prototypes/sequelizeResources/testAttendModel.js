var Sequelize = require("sequelize")
var sequelize = require("./connection")

var Attend = sequelize.define("attend", {
    userName: Sequelize.STRING,
    class: Sequelize.STRING,
    created_at: Sequelize.DATE,
    attend_stamp: Sequelize.STRING
})

Attend.sync();

module.exports = Attend;