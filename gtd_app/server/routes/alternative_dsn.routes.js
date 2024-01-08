// I wrote all code

const express = require("express");

// instantiate the express Router
const router = express.Router();

// instantiate the alternative_dsnn controller
const controller = require("../controllers/alternative_dsn.controller");

// GET alternative_dsns (/gtd/alternative_dsns)
router.get("/", controller.getAlternative_Dsns);

module.exports = router;
