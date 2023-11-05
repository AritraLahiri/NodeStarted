const path = require("path");
exports.successController = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "Views", "success.html"));
};
