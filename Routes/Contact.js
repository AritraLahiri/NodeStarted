const express = require("express");
const path = require("path");
const router = express.Router();
const contactController = require("../controllers/Contact");
router.get("/contact", contactController.contactUsController);
module.exports = router;
