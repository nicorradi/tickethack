var express = require('express');
var router = express.Router();

require("../models/connection");
const Trip = require("../models/trips");

/* GET home page. */
router.get('/', function(req, res, next) {
    Trip.find()
    res.render('index', { title: 'Express' });
});



module.exports = router;