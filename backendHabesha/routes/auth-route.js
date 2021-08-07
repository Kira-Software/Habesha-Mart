const express = require("express");
const User = require("./../models/user");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const jwt = require("jsonwebtoken");
router.route("/signup").post((req, res, next) => {
  console.log("something here...");
  next();
}, authController.signUp);
router.delete("/logout", authController.logout);
router.route("/login").post(authController.logIn);
router.route("forgetPassword").post(authController.forgetPassword);
router
  .route("resetPassword")
  .post(
    authController.restrictTo("classCustomer"),
    authController.resetPassword
  );
router.get("/isLoggedIn", async (req, res) => {
  try {
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
  } catch (err) {
    res.json({
      status: "fail",
      user: null,
      isLoggedIn: false,
    });
  }
});

module.exports = router;
