// I wrote all code

const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");

const cors = require("cors");

// instantiate express
const app = express();

// access application variables
const config = require("./config");

// EJS layout and template
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// access static files
app.use(express.static("public"));

// json
//app.use(express.json());

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

// application name from 'package.json'
var pjson = require("./package.json");
appName = pjson.name.charAt(0).toUpperCase() + pjson.name.slice(1);

// middleware
app.use(cors());

// Routes
//app.use("/gtd", require("./server/routes/gtd.routes"));
app.use("/gtd/regions", require("./server/routes/region.routes"));
app.use("/gtd/countries", require("./server/routes/country.routes"));
app.use("/gtd/nationalities", require("./server/routes/nationality.routes"));
app.use("/gtd/target_types", require("./server/routes/target_type.routes"));
app.use(
  "/gtd/target_subtypes",
  require("./server/routes/target_subtype.routes")
);
app.use("/gtd/weapon_types", require("./server/routes/weapon_type.routes"));
app.use(
  "/gtd/weapon_subtypes",
  require("./server/routes/weapon_subtype.routes")
);
app.use("/gtd/attack_types", require("./server/routes/attack_type.routes"));
app.use(
  "/gtd/alternative_dsns",
  require("./server/routes/alternative_dsn.routes")
);

module.exports = app;
