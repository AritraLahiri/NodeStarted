const express = require("express");
const userController = require("../controllers/UserController.js");
const router = express.Router();

// /admin/add-product => GET
router.get("/user", userController.getUsers);
router.post("/add-user", userController.addUserPost);

// // /admin/products => GET
// router.get("/user", adminController.getProducts);

// // /admin/add-product => POST
// router.post("/add-user", adminController.postAddProduct);

// router.get("/edit-user/:userId", adminController.getEditProduct);

// router.post("/edit-user", adminController.postEditProduct);

// router.post("/delete-user/:userId", adminController.deleteProduct);

module.exports = router;
