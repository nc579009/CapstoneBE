import mongoose from "mongoose";

// Define Inventory Schema
const InventorySchema = new mongoose.Schema({
  name: { type: String, required: true }, // Item name (e.g., "Shovel", "Tomato Seeds")
  category: { 
    type: String, 
    enum: ["tool", "seed", "supply", "plant"], 
    required: true 
  }, // Defines if it's a tool, seed, or supply
  quantity: { type: Number, default: 1 }, // Number of items available
  purchasedDate: { type: Date, default: Date.now }, // When the item was added
  status: { 
    type: String, 
    enum: ["Growing", "Ready to Harvest", "Harvested", "Available"], 
    default: "Available" 
  } // Current condition of the item
});

const Inventory = mongoose.model("inventory", InventorySchema)

export default Inventory;