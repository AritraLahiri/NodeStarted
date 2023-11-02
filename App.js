const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("In the First Middleware");
  next();
});
app.use((req, res, next) => {
  console.log("In the Second Middleware");
});

app.listen(4000);
