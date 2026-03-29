const mongoose = require("mongoose");

const intentSchema = new mongoose.Schema(
  {
    intent: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    patterns: {
      type: [String],
      required: true,
      default: [],
    },
    response: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Intent", intentSchema);