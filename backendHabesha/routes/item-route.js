const express = require("express");
const router = express.Router();
const itemController = require("../controllers/item-controller");
const authController = require("../controllers/auth-controller");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, req.user._id + file.originalname);
  },
});

const upload = multer({ storage: storage });

router
  .route("/")
  .post(
    authController.protect,
    authController.restrictTo("seller", "broker"),
    authController.isSuspended,
    upload.any("itemImage"),
    itemController.addItem
  )
  .get(itemController.findItem)
  .delete(
    authController.protect,
    authController.restrictTo("seller", "broker"),
    authController.isSuspended,
    itemController.deleteItem
  );

module.exports = router;
