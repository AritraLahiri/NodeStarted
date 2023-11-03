const express = require("express");
const router = express.Router();
router.get("/add", (req, res, next) => {
  res.send(
    "<form action='/add' method='POST'><input type='text' placeholder='Product' name='product'> <button type='submit'>Add</button></form>"
  );
});
router.post("/add", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;
