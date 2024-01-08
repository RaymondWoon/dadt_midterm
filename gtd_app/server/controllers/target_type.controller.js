// I wrote all code

// Load models
const { models } = require("../models");
const Target_Type = models.Target_Type;

// GET all target_types
exports.getTarget_Types = async (req, res, next) => {
  try {
    // find all target_types
    const target_types = await Target_Type.findAll();

    // create an array of 'target_types'
    const context = {
      items: target_types.map((item) => {
        return {
          id: item.target_type_id,
          description: item.target_type_txt,
        };
      }),
    };

    res.render("dashboard", {
      pageTitle: appName + " - Target_Types",
      title: "Target Types",
      items: context.items,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
