const mongoose = require("mongoose");

tripSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  date: Date,
  price: Number,
  reserved: Boolean,
});

const Trip = mongoose.model("trips", tripSchema);
module.exports = Trip;
