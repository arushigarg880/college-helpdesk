const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["chatbot", "admission"],
      default: "chatbot",
    },
    status: {
      type: String,
      enum: ["pending", "resolved"],
      default: "pending",
    },
    response: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Query", querySchema);