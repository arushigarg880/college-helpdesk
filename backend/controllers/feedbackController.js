const Feedback = require("../models/Feedback");

// Add feedback
exports.addFeedback = async (req, res) => {
  try {
    const { message } = req.body;

    const feedback = await Feedback.create({ message });

    res.json({
      status: "success",
      data: feedback,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// Get all feedbacks
exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });

    res.json({
      status: "success",
      data: feedbacks,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};