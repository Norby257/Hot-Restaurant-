//dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

//  body parsing code
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  routes for get request  - any way to make this more concise?
app.get("/", function(req, res) {
  //  send back index html page
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables.", function(req, res) {
  //send view.html
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", function(req, res) {
  //send view.html
  res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/api/tables", function(req, res){
  res.sendFile(path.join(__dirname, "post_reservations.json"));
  

})
//  start server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
