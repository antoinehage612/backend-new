// models/menuItemModel.js

const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  ingredients: { type: [String], required: true },
  category: { type: String, required: true },
});

const MenuItem = mongoose.model("MenuItem", menuSchema);

module.exports = MenuItem;
