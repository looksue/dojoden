// Dependencies
var Sequelize = require("sequelize");
const db = {}
// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("dojobasedb", "root", "BlackWarGreyMon_013", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

db.sequelize = sequelize
db.Sequelize = Sequelize

// Exports the connection for other files to use
module.exports = db;