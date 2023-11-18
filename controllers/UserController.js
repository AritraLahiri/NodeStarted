const User = require("../models/User");

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((user) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
      res.header("Access-Control-Allow-Headers", "Content-Type");
      res.json(user);
    })
    .catch((err) => console.log(err));
};
exports.addUserPost = (req, res, next) => {
  const name = req.Name;
  const email = req.Email;
  const phone = req.Phone;
  const dateAt = req.Date;
  const timeFrom = req.Time;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  console.log(req);
  User.create({
    name,
    email,
    phone,
    dateAt,
    timeFrom,
  })
    .then(() => {
      res.json([]);
    })
    .catch((err) => console.log(err));
  res.json([]);
};

// exports.getAllProducts = (req, res, next) => {
//   res.sendFile(path.join(__dirname, "../", "Views", "Shop.html"));
// };
// exports.getProduct = (req, res, next) => {
//   const prodId = req.params.prodId;
//   res.redirect("/");
//   // res.sendFile(path.join(__dirname, "../", "Views", "Shop.html"));
// };
