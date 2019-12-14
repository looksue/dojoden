// Dependencies
// =============================================================
var Student = require("../models/testStudentModel");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/students", function(req, res) {


    Student.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a student
  app.post("/api/newStudent", function(req, res) {

    console.log("Student data:");
    console.log(req.body);

    Student.create({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      belt: req.body.belt,
      stripes: req.body.stripes,
      age: req.body.age,
      gender: req.body.gender,
      health_concerns: req.body.health_concerns,
      created_at: req.body.created_at
    }).then(function(results) {
      res.end();
    });

  });

};