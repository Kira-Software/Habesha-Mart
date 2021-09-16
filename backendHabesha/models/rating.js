const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
  rateFor: { type: String },
  date: { type: Date, default: Date.now() },
  ratingAmount: { type: Number, enum: [1, 2, 3, 4, 5] },
});

module.exports = mongoose.model("Rating", ratingSchema);
