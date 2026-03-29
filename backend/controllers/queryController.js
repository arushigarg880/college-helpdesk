const Query = require("../models/Query");

// CREATE QUERY (chatbot)
exports.createQuery = async (req, res) => {
  try {
    const { message, type } = req.body;

    const query = await Query.create({
      message,
      type: type || "chatbot",
    });

    res.json({ status: "success", data: query });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

// GET ALL QUERIES (admin)
exports.getAllQueries = async (req, res) => {
  try {
    const queries = await Query.find().sort({ createdAt: -1 });

    res.json({ status: "success", data: queries });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

// GET QUERY BY ID (chatbot polling)
exports.getQueryById = async (req, res) => {
  try {
    const query = await Query.findById(req.params.id);

    res.json({ status: "success", data: query });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

// RESOLVE QUERY (admin)
exports.resolveQuery = async (req, res) => {
  try {
    const { response } = req.body;

    const updatedQuery = await Query.findByIdAndUpdate(
      req.params.id,
      {
        status: "resolved",
        response: response || "Resolved by admin",
      },
      { new: true }
    );

    res.json({ status: "success", data: updatedQuery });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};