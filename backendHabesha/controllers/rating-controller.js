const express = require("express");

const Rating = require("../models/rating");
const Item = require("../models/item");

const catchAsync = require("../utils/catchAsync");

exports.rateBroker = catchAsync(async (req, res, next) => {
  const { rateFor, ratingAmount } = req.body;
  const ratedBroker = await new Rating({
    rateFor: brokerId,
    ratingAmount: ratingAmount,
  });
  const savedRatedBroker = await ratedBroker.save();
  if (savedRatedBroker) {
    res.status(200).json({ message: "success" });
  }
});

exports.rateItem = catchAsync(async (req, res, next) => {
  const { rateFor, ratingAmount } = req.body;
  const newratingamount = parseInt(ratingAmount);
  console.log("the req.body", rateFor, ratingAmount);
  const ratedItem = new Rating({
    rateFor: rateFor,
    ratingAmount: newratingamount,
  });
  const savedRatedItem = await ratedItem.save();
  console.log("the savedrateditem value is ", savedRatedItem);

  const rate = await Rating.aggregate([
    { $match: { rateFor: rateFor } },
    { $group: { _id: "$rateFor", avgRate: { $avg: "$ratingAmount" } } },
  ]);

  const itemrate = await Item.findOneAndUpdate(
    { _id: rateFor },
    { rate: rate[0].avgRate }
  );

  if (savedRatedItem) {
    res.status(200).json({ message: "success" });
  }
});

exports.getBrokerRate = catchAsync(async (req, res, next) => {
  const { rateFor } = req.body;

  const rate = await Rating.aggregate([
    { $match: { rateFor: { rateFor } } },
    { $group: { rateFor: "$rateFor", avgRate: { $avg: "$ratingAmount" } } },
  ]);
  if (rate) {
    res.status(200).json({
      status: "success",
      data: rate,
    });
  }
});
exports.getItemRate = catchAsync(async (req, res, next) => {
  const { rateFor } = req.query;

  const rate = await Rating.aggregate([
    { $match: { rateFor: rateFor } },
    { $group: { _id: "$rateFor", avgRate: { $avg: "$ratingAmount" } } },
  ]);
  console.log("the result of rateeeeeeeee iss ", rate[0].avgRate);
  if (rate) {
    res.status(200).json({
      status: "success",
      data: rate,
    });
  }
});
