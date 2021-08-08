const express = require("express");

const Item = require("../models/item");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const multer = require("multer");

exports.checkBody = (req, res, next) => {
  if (
    !req.body.name ||
    !req.body.categoryId ||
    !req.body.price ||
    !req.body.postedBy ||
    !req.body.location
  ) {
    res.json({ message: "missing main elements of an item " });
  }
  next();
};

exports.addItem = catchAsync(async (req, res, next) => {
  //console.log("an item is here to be added");
  console.log("the comming datas are ",req.body)
  console.log("the req.user value is ", req.user)
  const {
    itemname,
    category,
    itemstatus,
    itemtype,
    description,
    price,
    quantity,
    locationcity,
    locationsubcity,
    image1,
    image2,
    image3,
    image4,
  } = req.body;

  const obj = {
    itemname,
    category,
    itemstatus,
    itemtype,
    description,
    price,
    quantity,
    locationcity,
    locationsubcity,
  };
if(req.files[0]){
  obj.image1 = req.files[0].path;
}
if(req.files[1]){
  obj.image2 = req.files[1].path;
}
if(req.files[2]){
  obj.image3 = req.files[2].path;
}
if(req.files[3]){
  obj.image4 = req.files[3].path;
}
  // obj.image1 = req.files[0].path;
  // obj.image2 = req.files[1].path;
  // obj.image3 = req.files[2].path;
  // obj.image4 = req.files[3].path;
  //const image = req.file.buffer;
  obj.postedBy = req.user._id;
console.log("the obj total value is ",obj)
  const addedItem = new Item(obj);
  await addedItem.save();
  res.status(200).json({ message: "Successfuly added !" });
});

exports.deleteItem = (req, res, next) => {};

exports.findItem = catchAsync(async (req, res, next) => {
  //BUILD A QUERY
  const queryObj = { ...req.query }; //creates object
  const excludedFields = ["page", "sort", "limit", "fields"];
  excludedFields.forEach((el) => delete queryObj[el]); //delete this fields from query
  const query = Item.find(queryObj);

  //ADVANCED FILTERING
  let queryStr = JSON.stringify(queryObj);
  query = queryStr.replace(/\b(gte|gt|lte|lt) \b/g, (match) => `$${match}`); //this is for in ur query u put like duration[gte]=5 new emtelut keza
  // queryObj {duration :{gte:'5'}} hone but '$gte' neber mehon yalbet so ene gte eyflege $ mechemer
  //SORTING
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" "); //?sort('price','rating') belehe yelakewn price rating belo leyebehca simultinius execute yagal b sort
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt"); //yehe demo menem aynet sort kaltera b default adisochun kela jemero yedredral
  }
  //limiting fields
  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    query = query.select(fields);
  } else {
    query = query.select("-__v");
  }
  //pagination
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 25; //25 items displayed initialy
  const skip = (page - 1) * limit;
  query = query.skip(skip).limit(limit);

  if (req.query.page) {
    const numOfItems = await Item.countDocuments();
    if (skip >= numOfItems) {
      return new AppError("No More items are available !");
    }
  }

  //EXECUTE A QUERY
  const item = await Item.find(JSON.parse(query)); // melseh wede object keyerena felega ketel

  //SEND RESPONSE
  res
    .status(200)
    .json({ status: "success", results: item.length(), data: item });
});
