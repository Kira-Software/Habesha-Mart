const express = require("express");

const Request = require("../models/request");
const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const AdvancedAccount = require("../models/advancedAccount");
const upgradeAccStore = require("../models/upgradeAccStore");
const replyRequest = require("../models/reply-request");

exports.sendItemRequest = catchAsync(async (req, res, next) => {
  console.log("the req.body value is ", req.body);
  const {
    requestname,
    requestcategory,
    requestdescription,
    requestlocation,
    requestquantity,
  } = req.body;
  // const brokers = [];
  // const responsibleBrokersAccount = await AdvancedAccount.find({
  //   serveLike: "broker",
  //   servingCategoryId: requestedItemCategory,
  // });
  // console.log(responsibleBrokersAccount);

  // responsibleBrokersAccount.map((broker, index) => {
  //   brokers[index] = broker.userId;
  // }); //responsible broker accpunt wesst idiwenbecha
  const requestedBy = req.user._id;
  // const requestedFor = brokers;
  const request = await new Request({
    requestname,
    requestcategory,
    requestdescription,
    requestlocation,
    requestquantity,
    requestedBy,
    // validUpTo, //validUpTo ccan be default 15 days
  });
  const requestSaved = await request.save();
  res.status(200).json({ message: "Your request has been sent Successfully" });
});
exports.getItemRequest = catchAsync(async (req, res, next) => {
  //find the broker Advanced Account
  // const brokerAdvancedAccount = await AdvancedAccount.find({
  //  userId: req.user._id,
  // });

  // const servingId = brokerAdvancedAccount[0].servingCategoryId;
  let userId = req.user._id;
  console.log("the userid is", userId);
  const userinfo = await upgradeAccStore.findOne({ userId });
  console.log("user info is", userinfo);
  const requestToMe = await Request.find({
    requestcategory: userinfo.category,
    requestlocation: userinfo.location,
  });

  console.log("the requestToMe is", requestToMe);

  res.status(200).json(requestToMe);
});
exports.replyItemRequest = catchAsync(async (req, res, next) => {
  const repliedBy = req.user._id;
  const {
    requestId,
    // repliedBy,
    //  itemFounded,
    replyname,
    replycategory,
    replydescription,
    replyquantity,
    replylocation,
  } = req.body;
  const replied = await new replyRequest({
    requestId,
    repliedBy,
    // itemFounded,
    replyname,
    replycategory,
    replydescription,
    replyquantity,
    replylocation,
  });

  const repliedSaved = await replied.save();
  // const updateRequest = await Request.findByIdAndUpdate(requestId, {
  //   isAccepted: true,
  // });

  if (
    repliedSaved
    //  && updateRequest
  ) {
    res.status
      .status(200)
      .json({ message: "you replied to the request successfuly" });
  }
});
// exports.acceptItemRequest=catchAsync(async(req,res,next)=>{
//     const {requestId,brokerId}=req.body;

// });
// exports.deleteItemRequest = (req, res, next) => {}; //optional for implementation
// exports.updateItemRequest = (req, res, next) => {};
exports.sendAccountUpgradeRequest = catchAsync(async (req, res, next) => {
  const { userId, legalId, roleType, servingCategoryId } = req.body;
  const accUpRequest = await new upgradeAccStore({
    userId: userId,
    legalId: legalId,
    roleType: roleType,
    servingCategoriyId: servingCategoryId,
  });
  const reqAccUp = await accUpRequest.save();

  if (reqAccUp) {
    res.status(200).json({
      message:
        "your upgrade request has been submitted successfuly! please wait for response.",
    });
  }
});

exports.getAccountUpgradeRequest = catchAsync(async (req, res, next) => {
  const requestList = await upgradeAccStore.find();
  if (requestList) {
    res.status(200).json({ data: requestList });
  }
});
