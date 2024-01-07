// I wrote all code

// Load models
const { models } = require("../models");
const Country = models.Country;

//const Region = require("../models/region.model");

// GET all regions
exports.getCountries = async (req, res, next) => {
  try {
    // find all regions
    //const regions = await Region.findAll({ order: ["region_id", "DESC"] });
    const countries = await Country.findAll();

    return res.status(200).json(countries);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
