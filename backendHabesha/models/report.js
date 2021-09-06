const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
  reportedFor: { type: String },
  reportedBy: { type: String },
  date: { type: Date, default: Date.now() },
  reportType: { type: String },
  isMeasureTaken: { type: Boolean, default: false },
});

module.exports = mongoose.model("Report", reportSchema);
