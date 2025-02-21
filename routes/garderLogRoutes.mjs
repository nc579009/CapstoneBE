import express from "express";
import GardenLog from "../model/GardenLog.mjs";

const router = express.Router();

//CRUD operations for garden log entries

// Create a new garden log entry (POST)
router.post("/", async (req, res) => {
  try {
    const newLog = new GardenLog(req.body);
    const savedLog = await newLog.save();
    res.status(201).json(savedLog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all garden log entries (GET)
router.get("/", async (req, res) => {
  try {
    const logs = await GardenLog.find();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Update a garden log entry (PUT)
router.put("/:id", async (req, res) => {
    try {
      const updatedLog = await GardenLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedLog) return res.status(404).json({ message: "Log entry not found" });
  
      res.json(updatedLog);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// Delete a garden log entry (DELETE)
  router.delete("/:id", async (req, res) => {
    try {
      const deletedLog = await GardenLog.findByIdAndDelete(req.params.id);
      if (!deletedLog) return res.status(404).json({ message: "Log entry not found" });
  
      res.json({ message: "entry deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


export default router;
