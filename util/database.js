const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-starter", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
