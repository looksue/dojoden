var Sequelize = require("sequelize")
var sequelize = require("./connection")

var Student = sequelize.define("student", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    belt: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    stripes: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    age: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    health_concerns: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    created_at: Sequelize.DATE
});

// Syncs with DB
Student.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Student;
