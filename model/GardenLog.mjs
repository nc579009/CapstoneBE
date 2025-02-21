const mongoose = require("mongoose");

// Define Garden Log Schema
const GardenLogSchema = new mongoose.Schema({
  plantName: { type: String, required: true }, // Name of the plant (e.g., "Tomatoes")
  plantedDate: { type: Date, required: true }, // When the plant was planted
  lastWatered: { type: Date, default: Date.now }, // Last watering date
  growthStage: { 
    type: String, 
    enum: ["seedling", "vegetative", "flowering", "harvest"], 
    required: true 
  }, // Current stage of plant growth
  notes: { type: String } // Any extra notes about care, pests, etc.
});

module.exports = mongoose.model("GardenLog", GardenLogSchema);
