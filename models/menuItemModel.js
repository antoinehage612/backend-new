const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: String,
  price: String,
  ingredients: [String],
  category: String,
});

const MenuItem = mongoose.model("MenuItem", menuSchema);

module.exports = MenuItem;
