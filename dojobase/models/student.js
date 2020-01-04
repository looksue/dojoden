module.exports = function (sequelize, DataTypes) {

    var Student = sequelize.define("Student", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        class: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        belt: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        stripe: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });

    // Student.associate = function (models) {
    //     Student.hasMany(models.Attend)
    // };

    return Student;

};