const mongoose = require("mongoose");

const userProfileSchema = mongoose.Schema({
  userId: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  avatar: { type: String },
  birthDate: { type: Date },
  address: { type: String },
  gender: { type: String },
  phoneNo: { type: String },
});

module.exports = mongoose.model("UserProfile", userProfileSchema);
