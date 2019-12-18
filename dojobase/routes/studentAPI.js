var db = require("../models/student")


// Routes
// =============================================================
module.exports = function(app) {

//   get all students
  app.get("/api/students", function(req, res) {
    db.Student.findAll({})
    .then(function(results) {
      res.json(results);
    });
  });

  // Add a student
  app.post("/api/newStudent", function(req, res) {

    console.log("Student data:");
    console.log(req.body);

    db.Student.create({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      class: req.body.class,
      belt: req.body.belt,
      stripes: req.body.stripes,
      age: req.body.age,
      gender: req.body.gender,
      student_notes: req.body.health_concerns,
      created_at: req.body.created_at
    }).then(function(results) {
      res.end();
    });
  });
};

app.post("/api/deleteStudent"), function(req, res) {
    db.Student.destroy({
        where: {
            userName: req.body.userName
        }
    }).then(function(results) {
        console.log("Student Deleted.")
        res.end();
    })
};