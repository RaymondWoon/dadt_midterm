// I wrote all code

const express = require("express");

// instantiate the express Router
const router = express.Router();

// instantiate the controller
const controller = require("../controllers/country.controller");

// GET country (/gtd/countriess)
router.get("/", controller.getCountries);

module.exports = router;
