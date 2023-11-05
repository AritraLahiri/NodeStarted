const express = require("express");
const path = require("path");
const router = express.Router();
const successController = require("../controllers/Contact");
router.get("/success", successController.successController);
module.exports = router;
