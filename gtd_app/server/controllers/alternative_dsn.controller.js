// I wrote all code

// Load models
const { models } = require("../models");
const Alternative_Dsn = models.Alternative_Dsn;

// GET all 'alternative_dsns'
exports.getAlternative_Dsns = async (req, res, next) => {
  try {
    // find all 'alternation_dsn
    const alternative_dsns = await Alternative_Dsn.findAll();

    // create an array of 'alternative_dsns'
    const context = {
      items: alternative_dsns.map((item) => {
        return {
          id: item.alternative_id,
          description: item.alternative_txt,
        };
      }),
    };

    res.render("dashboard", {
      pageTitle: appName + " - Alternative Dsns",
      title: "Alternative Designations",
      items: context.items,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
