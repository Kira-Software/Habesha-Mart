const express = require("express");

const User = require("../models/user");
const UserProfile = require("../models/user-profile");
const catchAsync = require("../utils/catchAsync");
const AdvancedAccount = require("../models/advancedAccount");

exports.deleteAccount = catchAsync(async (req, res, next) => {
  const { userIdToDelete } = req.body;
  const deleteUser = await User.findByIdAndDelete(userIdToDelete);
  res
    .status(200)
    .json({ message: "user Deleted Permanently from the system !" });
});

exports.suspendAccount = catchAsync(async (req, res, next) => {
  const { userIdToBeSuspended } = req.body;
  const suspendUser = await User.findByIdAndUpdate(userIdToBeSuspended, {
    isSuspended: true,
  });
  res.status(200).json({ message: "user has been suspended." });
});
exports.upgradeAccount = catchAsync(async (req, res, next) => {
  const { userId, roleType, servingCategoryId } = req.body;

  const upgradedUser = await User.findByIdAndUpdate(userId, { role: roleType });
  const serveLike = roleType;

  const createdAdvancedAccount = await new AdvancedAccount({
    servingCategoryId,
    serveLike,
    userId,
  });
  const saved = await createdAdvancedAccount.save();
  res
    .status(200)
    .json({ message: "Account has been Upgraded Successfuly", upgradedUser });
});
exports.getAccount = catchAsync(async (req, res, next) => {
  const { userIdForAccount } = req.body;
  const userDetail = await User.findById(userIdForAccount);
  res.status(200).json(userDetail);
});

// exports.getProfile=async(req,res,next)=>{

// }

exports.updateProfile = catchAsync(async (req, res, next) => {
  const userId = req.user._id;

  const {
    firstName,
    lastName,
    userName,
    birthDate,
    address,
    gender,
    phoneNo,
    telegramlink,
    facebooklink,
    instagramlink,
    whatsapplink,
  } = req.body;
  const profilePicture = req.files[0].path;
  const updateUserProfile = await UserProfile.findOneAndUpdate(userId, {
    firstName,
    lastName,
    userName,
    birthDate,
    address,
    gender,
    phoneNo,
    profilePicture,
    telegramlink,
    facebooklink,
    instagramlink,
    whatsapplink,
  });
  res.json({ message: "successfuly updated your account !!" });
});
exports.getProfile = catchAsync(async (req, res, next) => {
  const userId = req.params;
  const userProfile = userProfile.find({ userId });
  if (userProfile) {
    res.json({ status: "ok", data: userProfile });
  }
});

exports.updateProfilePicture = catchAsync(async (req, res, next) => {
  const userIdNo = req.user._id;
  const filter = { userId: userIdNo };

  const update = { avatar: req.file.buffer };
  const profilePicture = await UserProfile.findOneAndUpdate(filter, update);
  //await profilePicture.save();
  // req.userProfile.avatar=req.file.buffer  //stores binary image in to user profile try to learn how to get user from session

  res.json({ message: "your picture has been set successfuly !" });
});
