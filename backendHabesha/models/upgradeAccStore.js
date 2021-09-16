const mongoose = require("mongoose");
const upgradeAccStoreSchema = mongoose.Schema({
  userId: { type: String },
  roleType: { type: String },
  legalId: { type: String },
  category: { type: String },
  location: { type: String },
  isApproved: { type: Boolean, default: false },
});
module.exports = mongoose.model("upgradeAccStore", upgradeAccStoreSchema);
