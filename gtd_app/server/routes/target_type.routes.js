// I wrote all code

const express = require("express");

// instantiate the express Router
const router = express.Router();

// instantiate the controller
const controller = require("../controllers/target_type.controller");

// GET target_types (/gtd/target_types)
router.get("/", controller.getTarget_Types);

module.exports = router;
