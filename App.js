const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./Routes/Admin");
const homeRoutes = require("./Routes/Home");
const shopRoutes = require("./Routes/Shop");
const errorRoutes = require("./Routes/Error");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(homeRoutes);
app.use("/shop", shopRoutes);
app.use(errorRoutes);

app.listen(4000);
