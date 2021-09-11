const mongoose = require("mongoose");

const replyRequestSchema = mongoose.Schema({
  requestId: { type: String },
  repliedBy: { type: String },
  itemFounded: { type: String },
  replyname: { type: String },
  replycategory: { type: String },
  replydescription: { type: String },
  replyquantity: { type: Number },
  replylocation: { type: String },
  replyimage: { type: String },
  date: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("ReplyRequest", replyRequestSchema);
