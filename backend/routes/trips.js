var express = require("express");
var router = express.Router();

require("../models/connection");
const Trip = require("../models/trips");

/* GET home page. */
router.get("/", function (req, res) {
  Trip.find().then((data) => {
    console.log("va chercher les trips");
    res.json(data);
  });
});

module.exports = router;
