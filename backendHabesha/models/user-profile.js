const mongoose = require("mongoose");

const userProfileSchema = mongoose.Schema({
  userId: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  userName: { type: String },
  birthDate: { type: Date },
  address: { type: String },
  gender: { type: String },
  phoneNo: { type: String },
  telegramlink: { type: String },
  facebooklink: { type: String },
  instagramlink: { type: String },
  whatsapplink: { type: String },
  profilepicture: { type: String },
  legaldocument: { type: String },
  type: { type: String },

});

module.exports = mongoose.model("UserProfile", userProfileSchema);
