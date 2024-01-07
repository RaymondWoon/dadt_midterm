// I wrote all code

// Load models
const { models } = require("../models");
const Alternative_Dsn = models.Alternative_Dsn;

//const Region = require("../models/region.model");

// GET all regions
exports.getAlternative_Dsns = async (req, res, next) => {
  try {
    // find all regions
    //const regions = await Region.findAll({ order: ["region_id", "DESC"] });
    const alternative_dsns = await Alternative_Dsn.findAll();
    console.log(alternative_dsns);
    return res.status(200).json(alternative_dsns);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
