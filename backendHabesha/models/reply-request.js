const mongoose = require("mongoose");

const replyRequestSchema = mongoose.Schema({
  requestId: { type: String },
  repliedBy: { type: String },
  itemFounded: { type: String },
  itemAmount: { type: String },
  itemPrice: { type: Number },
  itemLocationCity: { type: String },
  itemLocationSubCity: { type: String },
  date: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("ReplyRequest", replyRequestSchema);
