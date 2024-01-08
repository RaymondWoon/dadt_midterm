// I wrote all code

// Load models
const { models } = require("../models");
const Region = models.Region;

//const Region = require("../models/region.model");

// GET all regions
exports.getRegions = async (req, res, next) => {
  try {
    // find all regions
    const regions = await Region.findAll();

    // create an array of 'regions'
    const context = {
      items: regions.map((item) => {
        return {
          id: item.region_id,
          description: item.region_txt,
        };
      }),
    };

    res.render("dashboard", {
      pageTitle: appName + " - Regions",
      title: "Regions",
      items: context.items,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

// const regionController = {
//   list: async (req, res, next) => {
//     try {
//       const regions = await Region.findAll();

//       return res.status(200).json(regions);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error });
//     }
//   },

//   show: async (req, res, next) => {
//     try {
//       const id = req.params.id;

//       const region = await Region.findAll({
//         where: {
//           id,
//         },
//       });

//       if (!region)
//         return res.status(404).json({ data: `No region found with id ${id}` });

//       return res.status(200).json(region);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error });
//     }
//   },
// };
