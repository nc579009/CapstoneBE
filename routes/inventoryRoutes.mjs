import express from "express";
import Inventory from "../model/Inventory.mjs";

const router = express.Router();

// CRUD operations for inventory items

// Create a new inventory item (POST)
router.post("/", async (req, res) => {
  try {
    const newItem = new Inventory(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all inventory items (GET)
router.get("/", async (req, res) => {
  try {
    const items = await Inventory.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an inventory item (PUT)
router.put("/:id", async (req, res) => {
    try {
      const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: "Item not found" });
  
      res.json(updatedItem);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


  // Delete an inventory item (DELETE)
  router.delete("/:id", async (req, res) => {
    try {
      const deletedItem = await Inventory.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: "Item not found" });
  
      res.json({ message: "Item deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
export default router;
