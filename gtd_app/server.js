// I wrote all code

// import 'app.js'
const app = require("./app");

// access the sequelize models
const { db } = require("./server/models");

// load configuration
const config = require("./config");

// define port to monitor for requests
const PORT = process.env.PORT || config.app.port;

db.sync().then(() => {
  // launch app and listen to port
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
  });
});
