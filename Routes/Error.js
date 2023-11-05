const express = require("express");
const path = require("path");
const router = express.Router();
router.use("*", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "../", "Views", "Error.html"));
});
module.exports = router;