//dependenices
var express = require("express");
var path = require("path");
var bodyParser = require("bodyParser");

var app = express();
var PORT = 3000;

//  body parsing code 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  routes 
app.get("/", function (req, res){
    //  send back index html page 
    res.sendFile(path.join(__dirname, "index.html"));
    
});

app.get("/view", function(req, res){
    //send view.html
    res.sendFile(path.join(__dirname, "view.html"));
    
})

//  start server 

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});