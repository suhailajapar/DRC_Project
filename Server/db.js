const Pool = require("pg").Pool;

let pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  database: "hikers",
});

module.exports = pool;
