// I wrote all code

const express = require("express");

// instantiate the express Router
const router = express.Router();

// instantiate the controller
const controller = require("../controllers/weapon_subtype.controller");

// GET weapon_subtypes (/gtd/weapon_subtypes)
router.get("/", controller.getWeapon_Subtypes);

module.exports = router;
