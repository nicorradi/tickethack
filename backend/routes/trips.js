var express = require("express");
var router = express.Router();

require("../models/connection");
const Trip = require("../models/trips");

/* GET home page. */
router.get("/", function (req, res, next) {
  Trip.find().then((data) => {
    res.json(data);
  });
});

router.get("/getTripsByCityName", function (req, res, next) {
  Trip.find({
    departure: req.body.cityNameDeparture,
    arrival: req.body.cityNameArrival,
  }).then((data) => {
    console.log("va chercher les voyages au départ et arrivee des villes");
    console.log(data);
    res.json(data);
  });
});

router.get("/getTripsByDate", function (req, res, next) {
  Trip.find({
    departure: req.body.cityNameDeparture,
    date: req.body.Date,
  }).then((data) => {
    console.log("affiche trips en fonction des villes et la date");
    console.log(data);
    res.json(data);
  });
});

module.exports = router;
