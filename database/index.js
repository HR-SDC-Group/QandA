const pgp = require("pg-promise")();

const login = {
  host: 'localhost',
  port: 5432,
  database: 'atelier',
  user: 'administrator',
  password: ''
};

const db = pgp(login);
module.exports = db;