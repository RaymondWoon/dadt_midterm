// I wrote all code

// Load models
const { models } = require("../models");
const Nationality = models.Nationality;

// GET all nationalities
exports.getNationalities = async (req, res, next) => {
  try {
    // find all nationalities
    const nationalities = await Nationality.findAll();

    // create an array of 'nationalities'
    const context = {
      items: nationalities.map((item) => {
        return {
          id: item.nationality_id,
          description: item.nationality_txt,
        };
      }),
    };

    res.render("dashboard", {
      pageTitle: appName + " - Nationalities",
      title: "Nationalities",
      items: context.items,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
