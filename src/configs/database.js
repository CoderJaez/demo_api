const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const { SERVER, USERNAME, PASS, DATABASE, DB_PORT } = process.env;
const connection = mysql.createConnection({
  host: SERVER,
  user: USERNAME,
  password: PASS,
  database: DATABASE,
});

module.exports = connection;
