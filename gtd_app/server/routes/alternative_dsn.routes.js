// I wrote all code

const express = require("express");

// instantiate the express Router
const router = express.Router();

// instantiate the region controller
const controller = require("../controllers/alternative_dsn.controller");

// GET regions (/gtd/regions)
router.get("/", controller.getAlternative_Dsns);

// GET region  (/gtd/region/{id})
//router.get("/:id", regionController.show);

module.exports = router;
