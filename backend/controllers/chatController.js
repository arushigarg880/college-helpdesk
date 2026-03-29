const { handleChat } = require("../services/chatService");

const chat = async (req, res) => {
  try {
    const { message } = req.body;

    // 🔴 Validation
    if (!message || message.trim() === "") {
      return res.status(400).json({
        status: "error",
        response: "Message is required",
      });
    }

    // 🤖 Call chatbot logic
    const result = await handleChat(message);

    // ✅ Send response back to frontend
    return res.status(200).json(result);

  } catch (error) {
    console.error("Chat Controller Error:", error);

    return res.status(500).json({
      status: "error",
      response: "Something went wrong on server",
    });
  }
};

module.exports = { chat };