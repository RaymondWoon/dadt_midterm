// I wrote all code

const express = require("express");

// instantiate the express Router
const router = express.Router();

// instantiate the controller
const controller = require("../controllers/target_subtype.controller");

// GET target_subtypes (/gtd/target_subtypes)
router.get("/", controller.getTarget_Subtypes);

module.exports = router;
