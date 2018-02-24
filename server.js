//dependenices
var express = require("express");
var path = require("path");
var bodyParser = require("bodyParser");

var app = express();
var PORT = 3000;

//  body parsing code 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  start server 

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});