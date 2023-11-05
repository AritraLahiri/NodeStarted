const express = require("express");
const path = require("path");
const router = express.Router();
const productController = require("../controllers/Products");
router.get("/", productController.getAllProducts);
module.exports = router;
