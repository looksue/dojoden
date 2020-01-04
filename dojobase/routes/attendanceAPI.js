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

    //retrieve all attendance stamps
    app.get("/api/attendance", function (req, res) {
        db.Attend.findAll({})
            .then(function (results) {
                res.json(results);
            });
    })

    //retrieve the attendance stamps of a particular student
    app.get("/api/attendance/:id", function(req, res) {
        db.Attend.findAll({
            where: {
                stud_name: req.params.stud_name
            },
            include: [db.class, db.created_at]
        }).then(function(dbAttend) {
            res.json(dbAttend)
        })
    })

    //create new attendance stamp
    app.post("/api/newAttendance", function (req, res) {
        console.log(req.body)

        db.Attend.create({
            stud_name: req.body.stud_name,
            class: req.body.class,
            created_at: req.body.created_at,
        }).then(function (results) {
            res.end();
        });
    })

}