const express = require("express");

const router = express.Router();
const authController = require("../controllers/auth-controller");
const accountController = require("../controllers/account-controller");
const UserProfile = require("../models/user-profile");
const AppError = require("../utils/appError");
const multer = require("multer");
const catchAsync = require("../utils/catchAsync");

// const upload=multer({
// //     dest:'avatars',   //this is for local directory storage
//     limits:{
//             fileSize: 10000000
//     },
//     fileFilter(req,file,cb){  //cb means callback like next new eshi
//         // if(!file.originalname.endsWith('.pdf')){
//         //         return cb(new AppError('please select a PDF file'))
//         // }
//         if(!file.originalname.match(/\.(png|jpg|jpeg)$/)){  //validation using regular expression this validation founds on regex101.com
//                 return cb(new AppError('please select a png|jpg|jpeg image Format ')) //do this for also word document by changing validation expression
//         }
//         cb(undefined,true)  //  no error hapen so go alew
//     }
// });
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
  .route("/upgradeAccount")
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    accountController.upgradeAccount
  );

router
  .route("/getAccount")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    accountController.getAccount
  );

  router
  .route("/getProfile")
  .get(
    authController.protect,
    accountController.getProfile
  );

router
  .route("/suspendAccount")
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    accountController.suspendAccount
  );

router
  .route("/deleteAccount")
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    accountController.deleteAccount
  );
// router.route('/getProfile')
//         .get(authController.protect,authController.restrictTo('classCustomer','broker','seller'),accountController.getProfile)

router
  .route("/updateProfile")
  .patch(
    authController.protect,
    authController.restrictTo("classCustomer", "broker", "seller"),
    upload.any("prfileImage"),
    accountController.updateProfile
  );

//image upload
//user should be authenicated and the updated image must be users it self

router.post(
  "/updateProfilePicture",
  authController.protect,
  upload.single("avatar"),
  accountController.updateProfilePicture
);

// .patch(authController.restrictTo('classCustomer','broker','seller'),accountController.updateProfilePicture)
module.exports = router;
