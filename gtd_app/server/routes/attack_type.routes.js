// I wrote all code

const express = require("express");

// instantiate the express Router
const router = express.Router();

// instantiate the controller
const controller = require("../controllers/attack_type.controller");

// GET attack_types (/gtd/attack_types)
router.get("/", controller.getAttack_Types);

module.exports = router;
