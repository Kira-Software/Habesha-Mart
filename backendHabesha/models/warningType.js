const mongoose = require("mongoose");

const warningTypeSchema = mongoose.Schema({
  warningName: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("WarningType", warningTypeSchema);
