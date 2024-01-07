// loads the defined variables from .env
require("dotenv").config();

// get the environment
const env = process.env.NODE_ENV;

// env parameters for production
const dev = {
  app: {
    port: parseInt(process.env.PROD_APP_PORT) || 8000,
  },
  db: {
    host: process.env.PROD_DB_HOST || "localhost",
    name: process.env.PROD_DB_NAME || "gtd",
    user: process.env.PROD_DB_USER || "gtd_user",
    pwd: process.env.DB_PWD,
    dialect: process.env.DB_DIALECT,
  },
};

const config = {
  dev,
};

module.exports = config[env];
