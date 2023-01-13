const express = require("express");
const router = express.Router();
const Entry = require("../models/entries");

router.get("/", async (req, res) => {
  const entries = await Entry.find();
  res.json(entries);
});

router.post("/", async (req, res) => {
  const entry = new Entry({
    sleepTime: req.body.sleepTime,
    wakeTime: req.body.wakeTime,
    timeLapsed: req.body.timeLapsed,
  });

  const newEntry = await entry.save();
  console.log(newEntry);
  res.send("Request sent successfully");
});

module.exports = router;
