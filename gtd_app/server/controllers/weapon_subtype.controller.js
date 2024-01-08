// I wrote all code

// Load models
const { models } = require("../models");
const Weapon_Subtype = models.Weapon_Subtype;

// GET all 'weapon_subtypes'
exports.getWeapon_Subtypes = async (req, res, next) => {
  try {
    // find all weapon_subtypes
    const weapon_subtypes = await Weapon_Subtype.findAll();

    // create an array of 'weapon_subtypess'
    const context = {
      items: weapon_subtypes.map((item) => {
        return {
          id: item.weapon_subtype_id,
          description: item.weapon_subtype_txt,
        };
      }),
    };

    res.render("dashboard", {
      pageTitle: appName + " - Weapon_Subtypes",
      title: "Weapon Subtypes",
      items: context.items,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
