const Query = require("../models/Query");

exports.sendResponse = async (req, res) => {
  try {
    const { queryId, response } = req.body;

    const query = await Query.findById(queryId);

    if (!query) {
      return res.status(404).json({ status: "error", message: "Query not found" });
    }

    query.response = response;
    query.status = "resolved";

    await query.save();

    console.log("Notification: Query resolved");

    res.json({ status: "success", data: query });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};