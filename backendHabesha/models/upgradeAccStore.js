const mongoose = require("mongoose");
const upgradeAccStoreSchema = mongoose.Schema({
  userId: { type: String },
  roleType: { type: String },
  legalId: { type: String },
  servingCategoryId: { type: String },
});
module.exports = mongoose.model("upgradeAccStore", upgradeAccStoreSchema);
