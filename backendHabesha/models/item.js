const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  itemname: { type: String },
  category: { type: String },
  itemstatus: { type: String, enum: ["New", "slightlyUsed", "Used"] },
  itemtype: { type: String, enum: ["For Sell", "For Rent"] },
  description: { type: String },
  price: { type: Number }, //////////////later to be changed to number type with quantity
  quantity: { type: String },
  locationcity: { type: String },
  locationsubcity: { type: String },
  image1: { type: String },
  image2: { type: String },
  image3: { type: String },
  image4: { type: String },
  postedBy: { type: String },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  isAvailable: { type: Boolean, default: true },
  rate: { type: Number, default: 1.0 },
});

module.exports = mongoose.model("Item", itemSchema);
