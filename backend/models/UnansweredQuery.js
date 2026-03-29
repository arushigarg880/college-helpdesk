const mongoose = require("mongoose");

const unansweredQuerySchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    detectedIntent: {
      type: String,
      default: "unknown",
    },
    confidence: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UnansweredQuery", unansweredQuerySchema);