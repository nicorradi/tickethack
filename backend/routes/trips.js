var express = require("express");
var router = express.Router();
let moment = require("moment");

require("../models/connection");
const Trip = require("../models/trips");

/* GET home page. */

/*
router.get("/", function (req, res, next) {
  Trip.find().then((data) => {
    res.json(data);
  });
});
*/

/*
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
*/

router.get("/", function (req, res, next) {
  Trip.find({
    departure: req.body.departure,
    arrival: req.body.arrival,
  }).then((data) => {
    let date = req.body.date;
    let filteredArray = data.filter(
      (item) => item.date.toISOString().substring(0, 10) === date
    );
    res.json({ trips: filteredArray });
  });
});

router.get("/getTripsByTripsReserved", function (req, res, next) {
  Trip.find({
    reserved : true 
  }).then((data) => {
    res.json({ data });
  });
})
module.exports = router;
