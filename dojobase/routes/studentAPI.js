var Student = require("../models/Student");


// Routes
// =============================================================
module.exports = function(app) {

//   get all students
  app.get("/api/students", function(req, res) {
    Student.findAll({})
    .then(function(results) {
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

app.post("/api/deleteStudent"), function(req, res) {
    Student.destroy({
        where: {
            userName: req.body.userName
        }
    }).then(function(results) {
        console.log("Student Deleted.")
        res.end();
    })
};