const express = require("express");
const multer = require("multer");
const User = require("../models/user");
const userProfile = require("../models/user-profile");
const UserProfile = require("../models/user-profile");
const catchAsync = require("../utils/catchAsync");

exports.deleteAccount = catchAsync(async (req, res, next) => {
  const { userIdToDelete } = req.body;
  const deleteUser = await User.findByIdAndDelete(userIdToDelete);
  res.json({ message: "user Deleted Permanently from the system !" });
});

exports.suspendAccount = catchAsync(async (req, res, next) => {
  const { userIdToBeSuspended } = req.body;
  const suspendUser = await User.findByIdAndUpdate(userIdToBeSuspended, {
    isSuspended: true,
  });
  res.json({ message: "user has been suspended." });
});
exports.upgradeAccount = catchAsync(async (req, res, next) => {
  const { userIdToBeUpgraded, roleType, description, location, idImage } =
    req.body;
  const upgradedUser = await User.findByIdAndUpdate(userIdToBeUpgraded, {
    role: roleType,
  });
  res.json({ message: "Account has been Upgraded Successfuly", upgradedUser });
});

exports.getAccount = catchAsync(async (req, res, next) => {
  console.log("inside getaccount");
  const { userIdForAccount } = req.body;
  const userDetail = await User.findById(userIdForAccount);
  res.json(userDetail);
});

exports.getProfile = catchAsync(async (req, res, next) => {
  console.log("inside getprofile");
  const { userIdForAccount } = req.user._id;
  const userDetail = await userProfile.findOne(userIdForAccount);
  res.json(userDetail);
});
// exports.getProfile=async(req,res,next)=>{

// }

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, req.user._id + file.originalname);
  },
});

const upload = multer({ storage: storage });

exports.updateProfile = catchAsync(async (req, res, next) => {
  const userId = req.user._id;

  // const {
  //   firstName,
  //   lastName,
  //   userName,
  //   birthDate,
  //   address,
  //   gender,
  //   phoneNo,
  //   telegramlink,
  //   facebooklink,
  //   instagramlink,
  //   whatsapplink,
  //   legaldocument,
  //   profilepicture,
  // } = req.body;
  console.log("the req.body value is ", req.body);
  let obj = req.body;
  // if (firstName !== "") {
  //   obj.firstName = firstName;
  // }
  // if (lastName !== "") {
  //   obj.lastName = lastName;
  // }
  // if (userName !== "") {
  //   obj.userName = userName;
  // }
  // if (birthDate !== "") {
  //   obj.birthDate = birthDate;
  // }
  // if (address !== "") {
  //   obj.address = address;
  // }
  // if (gender !== "") {
  //   obj.gender = gender;
  // }
  // if (phoneNo !== "") {
  //   obj.phoneNo = phoneNo;
  // }
  // if (telegramlink !== "") {
  //   obj.telegramlink = telegramlink;
  // }
  // if (facebooklink !== "") {
  //   obj.facebooklink = facebooklink;
  // }
  // if (instagramlink !== "") {
  //   obj.instagramlink = instagramlink;
  // }
  // if (whatsapplink !== "") {
  //   obj.whatsapplink = whatsapplink;
  // }
  if (req.files[0]) {
    obj.legaldocument = req.files[0].path;
  }
  if (req.files[1]) {
    obj.profilepicture = req.files[1].path;
  }

  await UserProfile.findOneAndUpdate(userId, obj);
  res.json({ message: "successfuly updated your account !!" });
});
// exports.updateProfilePicture=async(req,res,next)=>{

// }
(exports.updateProfilePicture = catchAsync(async (req, res, next) => {
  const userIdNo = req.user._id;
  const filter = { userId: userIdNo };

  const update = { avatar: req.file.buffer };
  const profilePicture = await UserProfile.findOneAndUpdate(filter, update);
  //await profilePicture.save();
  // req.userProfile.avatar=req.file.buffer  //stores binary image in to user profile try to learn how to get user from session

  res.json({ message: "your picture has been set successfuly !" });
})),
  (error, req, res, next) => {
    //to fuck errors and handle ezihu
    res.status(400).send({ error: error.message });
  };
