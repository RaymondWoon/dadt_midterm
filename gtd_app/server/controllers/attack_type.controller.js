// I wrote all code

// Load models
const { models } = require("../models");
const Attack_Type = models.Attack_Type;

// GET all 'attack_types'
exports.getAttack_Types = async (req, res, next) => {
  try {
    // find all attack_types
    const attack_types = await Attack_Type.findAll();

    // create an array of 'attack_types'
    const context = {
      items: attack_types.map((item) => {
        return {
          id: item.attack_type_id,
          description: item.attack_type_txt,
        };
      }),
    };

    res.render("dashboard", {
      pageTitle: appName + " - Attack_Types",
      title: "Attack Types",
      items: context.items,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
