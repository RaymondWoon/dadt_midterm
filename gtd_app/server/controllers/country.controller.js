// I wrote all code

// Load models
const { models } = require("../models");
const Country = models.Country;

// GET all countries
exports.getCountries = async (req, res, next) => {
  try {
    // find all countries
    const countries = await Country.findAll();

    // create an array of 'countries'
    const context = {
      items: countries.map((item) => {
        return {
          id: item.country_id,
          description: item.country_txt,
        };
      }),
    };

    res.render("dashboard", {
      pageTitle: appName + " - Countries",
      title: "Countries",
      items: context.items,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
