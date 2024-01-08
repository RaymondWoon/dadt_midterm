// I wrote all code

// Load models
const { models } = require("../models");
const Target_Subtype = models.Target_Subtype;

// GET all target_subtypes
exports.getTarget_Subtypes = async (req, res, next) => {
  try {
    // find all target_subtypes
    const target_subtypes = await Target_Subtype.findAll();

    // create an array of 'target_subtypess'
    const context = {
      items: target_subtypes.map((item) => {
        return {
          id: item.target_subtype_id,
          description: item.target_subtype_txt,
        };
      }),
    };

    res.render("dashboard", {
      pageTitle: appName + " - Target_Subtypes",
      title: "Target Subtypes",
      items: context.items,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
