const mongoose = require("mongoose");

const userProfileSchema = mongoose.Schema({
  userId: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
<<<<<<< HEAD
  avatar: { type: String },
=======
  userName: { type: String },
  avatar: { type: Buffer },
>>>>>>> 54c82458a7849e11f2fe06478a8ba1dc773c7a68
  birthDate: { type: Date },
  address: { type: String },
  gender: { type: String },
  phoneNo: { type: String },
<<<<<<< HEAD
=======
  telegramlink: { type: String },
  facebooklink: { type: String },
  instagramlink: { type: String },
  whatsapplink: { type: String },
  legaldocument: { type: String },
  profilepicture: { type: String },
>>>>>>> 54c82458a7849e11f2fe06478a8ba1dc773c7a68
});

module.exports = mongoose.model("UserProfile", userProfileSchema);
