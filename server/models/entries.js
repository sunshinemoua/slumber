const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  sleepTime: {
    type: Date,
    required: true,
  },

  wakeTime: {
    type: Date,
    required: true,
  },

  timeLapsed: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Entry", entrySchema);
