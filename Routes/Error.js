const express = require("express");
const path = require("path");
const errorController = require("../controllers/Error");
const router = express.Router();
router.use("*", errorController);
module.exports = router;
