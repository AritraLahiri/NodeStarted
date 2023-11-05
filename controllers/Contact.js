const path = require("path");
exports.contactUsController = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "Views", "Contact.html"));
};
