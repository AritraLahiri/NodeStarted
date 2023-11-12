const db = require("mysql2");
const pool = db.createPool({
  host: "localhost",
  user: "root",
  database: "node-starter",
  password: "root",
});
module.exports = pool.promise();
