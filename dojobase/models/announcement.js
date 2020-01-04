module.exports = function (sequelize, DataTypes) {
    var Announcement = sequelize.define("announcement", {
        title: DataTypes.STRING,
        created_at: DataTypes.DATE,
        message: DataTypes.STRING
    })

    return Announcement
}