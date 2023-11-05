const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const adminRoutes = require("./Routes/Admin");
const homeRoutes = require("./Routes/Home");
const shopRoutes = require("./Routes/Shop");
const contactRoutes = require("./Routes/Contact");
const successRoutes = require("./Routes/Success");
const errorRoutes = require("./Routes/Error");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoutes);
app.use(homeRoutes);
//app.use(contactRoutes);
app.use(successRoutes);
app.use("/shop", shopRoutes);
app.use(errorRoutes);

app.listen(4000);
