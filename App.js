const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const User = require("./models/User");
const Products = require("./models/Products");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const userRoutes = require("./Routes/user");
const sequelize = require("./util/database");

Products.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Products);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(userRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize
  .sync()
  .then((res) => {
    // console.log(res);
  })
  .catch((err) => console.log(err));

app.listen(3000);
