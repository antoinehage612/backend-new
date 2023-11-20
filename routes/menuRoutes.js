// routes/menuRoutes.js

const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menuItemModel");

// GET all menu items
router.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST a new menu item
router.post("/", async (req, res) => {
  try {
    const newItem = new MenuItem(req.body);
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT/UPDATE a menu item by ID
router.put("/:id", async (req, res) => {
  const itemId = req.params.id;
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(itemId, req.body, {
      new: true,
    });
    res.json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE a menu item by ID
router.delete("/:id", async (req, res) => {
  const itemId = req.params.id;
  try {
    const deletedItem = await MenuItem.findOneAndDelete({ _id: itemId });
    res.json(deletedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
