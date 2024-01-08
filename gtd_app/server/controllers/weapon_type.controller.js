// I wrote all code

// Load models
const { models } = require("../models");
const Weapon_Type = models.Weapon_Type;

// GET all weaponss
exports.getWeapon_Types = async (req, res, next) => {
  try {
    // find all weapon_types
    const weapon_types = await Weapon_Type.findAll();

    // create an array of 'weapon_types'
    const context = {
      items: weapon_types.map((item) => {
        return {
          id: item.weapon_type_id,
          description: item.weapon_type_txt,
        };
      }),
    };

    res.render("dashboard", {
      pageTitle: appName + " - Weapon_Types",
      title: "Weapon Types",
      items: context.items,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
