// Load models
const { Sequelize } = require("sequelize");
const { db } = require("../models");

exports.getAllKilled_Country = async (req, res, next) => {
  try {
    const nkills = await db.query(
      `SELECT tev.country_id, ctry.country_txt, SUM(nkill) AS sumKill
        FROM terrorism_event tev 
        INNER JOIN country ctry 
        ON tev.country_id = ctry.country_id 
        WHERE ctry.country_id IN (SELECT ctry.country_id FROM country) 
        GROUP BY ctry.country_id;`,
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    // create an array
    const context = {
      items: nkills.map((item) => {
        return {
          id: item.country_id,
          description: item.country_txt,
          nkill: item.sumKill,
        };
      }),
    };

    res.render("q1", {
      pageTitle: appName + " - Killed - Country",
      title: "Killed by Country",
      subtitle: "Country",
      items: context.items,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllKilled_Region = async (req, res, next) => {
  try {
    const nkills = await db.query(
      `SELECT r.region_id, r.region_txt, SUM(nkill) AS sumKill
      FROM terrorism_event tev
      INNER JOIN country c
      ON tev.country_id = c.country_id 
        INNER JOIN region r 
        ON c.region_id = r.region_id 
        WHERE r.region_id IN (SELECT r.region_id FROM region) 
        GROUP BY r.region_id;`,
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    // create an array
    const context = {
      items: nkills.map((item) => {
        return {
          id: item.region_id,
          description: item.region_txt,
          nkill: item.sumKill,
        };
      }),
    };

    res.render("q1", {
      pageTitle: appName + " - Killed - Region",
      title: "Killed by Region",
      subtitle: "Region",
      items: context.items,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllKilled_WeaponType = async (req, res, next) => {
  try {
    const nkills = await db.query(
      `SELECT ew.weapon_type_id, wt.weapon_type_txt, SUM(nkill) AS sumKill
        FROM terrorism_event tev 
        INNER JOIN event_weapon ew 
        ON tev.event_id = ew.event_id 
        INNER JOIN weapon_type wt 
        ON ew.weapon_type_id = wt.weapon_type_id 
        WHERE ew.weapon_type_id 
            IN (SELECT weapon_type_id FROM weapon_type) GROUP BY ew.weapon_type_id;`,
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    // create an array
    const context = {
      items: nkills.map((item) => {
        return {
          id: item.weapon_type_id,
          description: item.weapon_type_txt,
          nkill: item.sumKill,
        };
      }),
    };

    res.render("q1", {
      pageTitle: appName + " - Killed - Weapon Type",
      title: "Killed by Weapon Type",
      subtitle: "Weapon Type",
      items: context.items,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllKilled_WeaponSubtype = async (req, res, next) => {
  try {
    const nkills = await db.query(
      `SELECT ew.weapon_subtype_id, ws.weapon_subtype_txt, SUM(nkill) AS sumKill
        FROM terrorism_event tev 
        INNER JOIN event_weapon ew 
        ON tev.event_id = ew.event_id 
        INNER JOIN weapon_subtype ws 
        ON ew.weapon_subtype_id = ws.weapon_subtype_id 
        WHERE ew.weapon_subtype_id 
            IN (SELECT weapon_subtype_id FROM weapon_subtype) GROUP BY ew.weapon_subtype_id;`,
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    // create an array
    const context = {
      items: nkills.map((item) => {
        return {
          id: item.weapon_subtype_id,
          description: item.weapon_subtype_txt,
          nkill: item.sumKill,
        };
      }),
    };

    res.render("q1", {
      pageTitle: appName + " - Killed - Weapon Subtype",
      title: "Killed by Weapon Subtype",
      subtitle: "Weapon Subtype",
      items: context.items,
    });
  } catch (error) {
    console.log(error);
  }
};
