const express = require("express");

const router = express.Router();
const ratingController = require("../controllers/rating-controller");
const authController = require("../controllers/auth-controller");

router
  .route("/rateItem")
  .post(
    authController.protect,
    authController.restrictTo("classCustomer"),
    ratingController.rateItem
  )
  .get(ratingController.getItemRate);

router
  .route("/rateBroker")
  .post(
    authController.protect,
    authController.restrictTo("classCustomer"),
    ratingController.rateBroker
  )
  .get(ratingController.getBrokerRate);

module.exports = router;
