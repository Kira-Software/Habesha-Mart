const experess = require("express");
const Item = require("../models/item");
const UserProfile = require("../models/user-profile");
const Comment = require("../models/comment");

exports.giveCommentOnPerson = catchAsync(async (req, res, next) => {
  const { commentBody, commentFor } = req.body;

  const newComment = new Comment({
    comment: commentBody,
    userId: req.user.id,
    commentFor: commentFor,
  });
  const commented = await newComment.save();
  res.status(200).json({ message: "commented successsfuly" });
});

exports.getCommentOnPerson = catchAsync(async (req, res, next) => {
  const personId = req.query;

  const foundComment = await Comment.find({ commentFor: personId });
  if (!foundComment) {
    res.status(200).json({ data: "" });
  } else {
    res.status(200).json({ message: "success", data: foundComment });
  }
});

exports.giveCommentOnItem = catchAsync(async (req, res, next) => {
  const { commentBody, itemId } = req.body;

  const newComment = new Comment({
    comment: commentBody,
    userId: req.user.id,
    itemId: itemId,
  });
  const commented = await newComment.save();

  res.status(200).json({ message: "success" });
});

exports.getCommentOnItem = catchAsync(async (req, res, next) => {
  const itemId = req.query;
  const foundComment = await Comment.find({ itemId: itemId });
  if (!foundComment) {
    res.status(200).json({ message: "no comment has been added!", data: "" });
  } else {
    res.status(200).json({ message: "success", data: foundComment });
  }
});
