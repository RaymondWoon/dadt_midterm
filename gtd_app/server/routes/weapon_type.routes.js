// I wrote all code

const express = require("express");

// instantiate the express Router
const router = express.Router();

// instantiate the controller
const controller = require("../controllers/weapon_type.controller");

// GET weapon_types (/gtd/weapon_types)
router.get("/", controller.getWeapon_Types);

module.exports = router;
