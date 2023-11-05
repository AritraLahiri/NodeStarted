const path = require("path");
exports.addGetProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "Views", "AddProduct.html"));
};
exports.addProductPost = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};

exports.getAllProducts = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "Views", "Shop.html"));
};
