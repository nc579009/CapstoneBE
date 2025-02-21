import express from "express";
import Inventory from "../models/Inventory.mjs";

const router = express.Router();

// ✅ Create a new inventory item (POST)
router.post("/", async (req, res) => {
  try {
    const newItem = new Inventory(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all inventory items (GET)
router.get("/", async (req, res) => {
  try {
    const items = await Inventory.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
