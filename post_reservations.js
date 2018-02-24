var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var app = express();
var PORT = 3000;

var reservations = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    // gotta send something back to the browser
    res.sendFile(path.join(__dirname, "home.html"));
});

// gets all existing reservations "view tables"
app.get("/api/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// gets all inputted reservations
app.get("/api/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});

// creats new reservations - takes in JSON input
app.post("/tables", function(req, res) {
    var newReservation = req.body;
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);

    for (var i = 0; i < 5; i++) {
        fs.write("reservations.json", reservations[i], function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("reservations.json was updated");
        });        
    }

    for (var j = 5; j < reservations.length; j++) {
        fs.write("waitlist.json", reservations[j], function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("waitlist.json was updated");
        });
    } 
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});