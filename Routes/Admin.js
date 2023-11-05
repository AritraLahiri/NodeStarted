const express = require("express");
const path = require("path");
const router = express.Router();
const productController = require("../controllers/Products");
router.get("/add", productController.addGetProduct);
router.post("/add", productController.addProductPost);
module.exports = router;
