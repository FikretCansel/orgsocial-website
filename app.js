const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "/public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

const port= 4000;

app.listen(port, function () {
  console.log("Listening on port 4000!");
});
