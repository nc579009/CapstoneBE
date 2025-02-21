import express from "express";
import GardenLog from "../models/GardenLog.mjs";

const router = express.Router();

// ✅ Create a new garden log entry (POST)
router.post("/", async (req, res) => {
  try {
    const newLog = new GardenLog(req.body);
    const savedLog = await newLog.save();
    res.status(201).json(savedLog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all garden log entries (GET)
router.get("/", async (req, res) => {
  try {
    const logs = await GardenLog.find();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
