var db = require("../models")


// Routes
// =============================================================
module.exports = function (app) {

    // ====  Begin routes required for Okta

    // '/' default home page to handle basic control of the app
    app.get("/", function (req, res) {
    });

    // '/implicit/callback' where auth is handled by Okta
    app.get("/implicit/callback", function (req, res) {
    });

    // ====  End routes required for Okta

    //retrieves all announcements
    app.get("/api/announcements", function (req, res) {
        db.Announcement.findAll({})
            .then(function (results) {
                res.json(results)
            })
    })

    //create new announcement
    app.post("/api/newAnnouncement", function (req, res) {
        console.log(req.body)

        db.Announcement.create({
            title: req.body.title,
            created_at: req.body.created_at,
            message: req.body.message
        }).then(function (results) {
            res.end();
        })
    })
}