const express = require("express");
const reportType = require("../models/warningType");
const Item = require("../models/item");
const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");
const Report = require("../models/report");

exports.sendReport = catchAsync(async (req, res, next) => {
  console.log("the coming req.body is ", req.body);
  const { id, reporttype, reportcontent } = req.body;

  const item = await Item.findOne({ _id: id });
  const newReport = new Report({
    reporttype,
    reportcontent,
    reportedBy: req.user._id,
    reportedFor: item._id,
    itemOwner: item.postedBy,
  });
  const reported = await newReport.save();
  if (reported) {
    res.status(200).json({ message: "succesfully sent report" });
  } else {
    res.status(500).json({ message: "unable to send report.." });
  }
});

exports.getReport = catchAsync(async (req, res, next) => {
  //report should be grouped by reportedOn broker or seller

  // const foundReport = await Report.aggregate([
  //   {
  //     $group: {
  //       _id: { reportedFor: "$reportedFor" },
  //     },
  //   },
  //   { $count: "totalReport" },
  // ]);
  const foundReport = await Report.find({ isMeasureTaken: "false" });

  if (!foundReport) {
    res.status(200).json({ message: "success", data: "" });
  } else {
    res.status(200).json({ message: "success", data: foundReport });
  }
});

exports.addReportType = catchAsync(async (req, res, next) => {
  const { reportName } = req.body;

  const newReport = new reportType({
    reportName,
  });
  const savedReportType = await newReport.save();
  if (savedReportType) {
    res.status(200).json({ message: "report added successfuly" });
  } else {
    res.status(200).json({ message: "fail" });
  }
});
