const express = require("express");

const router = express.Router();
const warningController = require("../controllers/warning-controller");
const authController = require("../controllers/auth-controller");

router
  .route("/sendWarning")
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    warningController.sendWarning
  );
router
  .route("/getWarning")
  .get(
    authController.protect,
    authController.restrictTo("broker", "seller"),
    warningController.getWarning
  );
router
  .route("/warningRecieved")
  .post(
    authController.protect,
    authController.restrictTo("broker", "seller"),
    warningController.warningRecieved
  );
router
  .route("/addWarningType")
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    warningController.addWarningType
  );

module.exports = router;
