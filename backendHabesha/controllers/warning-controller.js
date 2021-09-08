const express = require("express");
const warningType = require("../models/warningType");
const Report = require("../models/report");
const User = require("../models/user");
const warning = require("../models/warning");
const catchAsync = require("../utils/catchAsync");

exports.sendWarning = catchAsync(async (req, res, next) => {
  const { warningType, warningBody, reportId } = req.body;

  const report = await Report.findOne({ _id: reportId });

  const newWarning = new warning({
    warningType: warningType,
    warningBody: warningBody,
    sendFor: report.reportedFor, // the user that the warning is to be sent (the one who receives the warning)
    sendBy: req.user._id, // the administrator
  });
  const warn = await newWarning.save();
  res.status(200).json({ message: "Warnning sent !", warn });
});

exports.getWarning = catchAsync(async (req, res, next) => {
  const warn = await warning.find({
    sendFor: req.user._id,
    isArrived: "false",
  });
  if (!warn) {
    res.status(200).json({ message: "no warning ", data: "" });
  } else {
    res.status(200).json({ message: "success", data: warn });
  }
});
exports.warningRecieved = catchAsync(async (req, res, next) => {
  const { warningId } = req.body;
  const warnRecieved = await warning.findByIdAndUpdate(warningId, {
    isArrived: "true",
  });
  res.status(200).json({ message: "warnning has been accepted" });
});

exports.addWarningType = catchAsync(async (req, res, next) => {
  const { warningName, description } = req.body;

  const addWarn = new warningType({
    warningName,
    description,
  });
  await addWarn.save();
  res.status(200).send({ message: "Seccessfuly added !" });
});
