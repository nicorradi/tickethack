const mongoose = require("mongoose");
const voyage = mongoose.Schema({
  type: mongoose.Schema.Types.ObjectId,
  ref: "Trips",
});

reservationSchema = mongoose.Schema({
  trips: [voyage],
  isPurchased: Boolean,
});

module.exports = mongoose.model("reservation", reservationSchema);
