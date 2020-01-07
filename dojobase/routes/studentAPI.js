var db = require("../models")

// Routes
// =============================================================
module.exports = function (app) {

  // ====  Begin routes required for Okta
  
  // '/' default home page to handle basic control of the app
  app.get("/whatever", function (req, res) {
    res.end("hello world");
  });

  // '/implicit/callback' where auth is handled by Okta
  app.get("/implicit/callback", function (req, res) {
  });

  // ====  End routes required for Okta

  //   get all students
  app.get("/api/students", function (req, res) {
    db.Student.findAll({})
      .then(function (results) {
        res.json(results);
      });
  });

  // Add a student
  app.post("/api/newStudent", function (req, res) {

    console.log("Student data:");
    console.log(req.body);

    db.Student.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      class: req.body.class,
      belt: req.body.belt,
      stripes: req.body.stripes
    }).then(function (results) {
      res.end();
    });
  });


  app.delete("/api/students"), function (req, res) {
    db.Student.destroy({
      where: {
        id: req.body.id
      }
    }).then(function (results) {
      console.log("Student Deleted.")
      res.end();
    })
  };
};