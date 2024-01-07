// I wrote all code

// Load models
const { models } = require("../models");
const Nationality = models.Nationality;

//const Region = require("../models/region.model");

// GET all regions
exports.getNationalities = async (req, res, next) => {
  try {
    // find all regions
    //const regions = await Region.findAll({ order: ["region_id", "DESC"] });
    const nationalities = await Nationality.findAll();
    console.log(nationalities);
    return res.status(200).json(nationalities);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
