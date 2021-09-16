const express = require("express");
const User = require("./../models/user");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");
router.route("/signup").post(authController.signUp);
router.delete("/logout", authController.logout);
router.route("/login").post(authController.logIn);
router.route("/forgetPassword").post(authController.forgetPassword);
router
  .route("/resetPassword")
  .post(
    authController.restrictTo("classCustomer,broker,seller"),
    authController.resetPassword
  );
router.route("/getAllUser").get(
  //authController.restrictTo("admin"),
  authController.getAllUser
);
router.get(
  "/isLoggedIn",
  catchAsync(async (req, res) => {
    if (!req.session.token) {
      return res.json({
        status: "fail",
        user: null,
        isLoggedIn: false,
      });
    }
    const token = req.session.token;

    const verified = await jwt.verify(token, process.env.SECRET);

    const { id } = verified;

    const user = await User.findById(id);
    if (!user) {
      return res.json({
        status: "fail",
        user: null,
        isLoggedIn: false,
      });
    }

    res.status(200).json({
      status: "success",
      user,
      isLoggedIn: true,
    });
  })
);

module.exports = router;
