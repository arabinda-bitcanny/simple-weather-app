const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME + "_development",
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_TYPE,
    "operatorsAliases": 0
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME + "_test",
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_TYPE,
    "operatorsAliases": 0
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME + "_production",
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_TYPE,
    "operatorsAliases": 0
  }
}
