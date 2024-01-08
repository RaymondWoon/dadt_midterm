// I wrote all code

const express = require("express");

// instantiate the express Router
const router = express.Router();

// instantiate the controller
const controller = require("../controllers/nationality.controller");

// GET nationalities (/gtd/nationalities)
router.get("/", controller.getNationalities);

module.exports = router;
