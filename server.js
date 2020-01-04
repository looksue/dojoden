const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./dojobase/routes/studentAPI")(app)
require("./dojobase/routes/attendanceAPI")(app)
require("./dojobase/routes/announcementAPI")(app)


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./dojobase/public/index.html"));
  });  

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  