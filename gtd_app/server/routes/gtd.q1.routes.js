// I wrote all code

const express = require("express");

// instantiate the express Router
const router = express.Router();

// instantiate the region controller
const controller = require("../controllers/gtd.q.controller");

// GET regions (/gtd/regions)
//router.get("/", async (req, res) => {
//  const q1 = await fetch(`${BASE_URL}/api/query/`);
//});

router.get("/", controller.getAllKilled_WeaponType);

module.exports = router;
