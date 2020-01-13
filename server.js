const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000; // was 3001
const app = express();
var db = require("./dojobase/models");

// Begin Manage CORS

// var cors = require("cors");
// app.use(cors());

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

app.use(allowCrossDomain);

app.all('*', function(req, res, next) {
  var origin = req.get('origin'); 
  res.header('Access-Control-Allow-Origin', origin);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// End Manage CORS

 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());

// app.use(express.static("public"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("dojobase/build"));
}

// test proxy to fix CORS error on Heroku
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

require("./dojobase/routes/studentAPI")(app);
// require("./dojobase/routes/attendanceAPI")(app);
// require("./dojobase/routes/announcementAPI")(app);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./dojobase/public/index.html"));
  });  

  db.sequelize.sync().then(function() {
    //app.listen(PORT, function() {
    //  console.log("App listening on PORT " + PORT);
    //});
  });
  