const express = require("express");

const router = express.Router();

const requestController = require("../controllers/request-controller");
const authController = require("../controllers/auth-controller");

router
  .route("/sendItemRequest")
  .post(
    authController.protect,
   // authController.restrictTo("classCustomer"),
    requestController.sendItemRequest
  );
// .delete(requestController.deleteItemRequest) //for classCustomers optional for implmentaion
// .patch(requestController.updateItemRequest); //for classCustomers   optional for implementaion
router
  .route("/replyItemrequest")
  .post(
    authController.protect,
    authController.isSuspended,
    authController.restrictTo("broker"),
    requestController.replyItemRequest
  ); //for brokers
router
  .route("/getItemRequest")
  .get(
    authController.protect,
    authController.isSuspended,
    authController.restrictTo("broker"),
    requestController.getItemRequest
  ); //for brokers

router
  .route("/sendAccountUpgradeRequest")
  .get(
    authController.protect,
    authController.restrictTo("classCustomer"),
    requestController.sendAccountUpgradeRequest
  ); // for class customers

router
  .route("/getAccountUpgradeRequest")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    requestController.getAccountUpgradeRequest
  ); //for admin

module.exports = router;
