const express = require("express");

const router = express.Router();
const commentController = require("../controllers/comment-controller");
const authController = require("../controllers/auth-controller");

router
  .route("/commentOnItem")
  .post(
    authController.protect,
    authController.restrictTo("classCustomer", "broker", "seller"),
    commentController.giveCommentOnItem
  )
  .get(commentController.getCommentOnItem);

router
  .route("/commentOnPerson")
  .post(
    authController.protect,
    authController.restrictTo("classCustomer", "seller", "broker"),
    commentController.giveCommentOnPerson
  )
  .get(commentController.getCommentOnPerson);

module.exports = router;
