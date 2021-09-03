const mongoose = require("mongoose");

const userProfileSchema = mongoose.Schema({
  userId: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  userName: { type: String },
  avatar: { type: Buffer },
  birthDate: { type: Date },
  address: { type: String },
  gender: { type: String },
  phoneNo: { type: String },
  legaldocument: { type: String },
});

module.exports = mongoose.model("UserProfile", userProfileSchema);
