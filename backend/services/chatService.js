const Intent = require("../models/Intent");
const UnansweredQuery = require("../models/UnansweredQuery");
const { detectIntent } = require("../utils/nlp");
const { checkRules } = require("../utils/rules");

const handleChat = async (message) => {
  const cleanMessage = message.trim();

  if (!cleanMessage) {
    return {
      status: "error",
      response: "Message is required",
    };
  }

  // 1. Rule-based
  const ruleIntent = checkRules(cleanMessage);

  if (ruleIntent) {
    const intentDoc = await Intent.findOne({ intent: ruleIntent });

    if (intentDoc) {
      return {
        status: "success",
        method: "rule-based",
        intent: intentDoc.intent,
        confidence: 1,
        response: intentDoc.response,
      };
    }
  }

  // 2. NLP-based
  const nlpResult = await detectIntent(cleanMessage);

  if (nlpResult.intent && nlpResult.confidence > 0.2) {
    const intentDoc = await Intent.findOne({ intent: nlpResult.intent });

    if (intentDoc) {
      return {
        status: "success",
        method: "nlp",
        intent: intentDoc.intent,
        confidence: nlpResult.confidence,
        response: intentDoc.response,
      };
    }
  }

  // 3. Fallback
  await UnansweredQuery.create({
    question: cleanMessage,
    detectedIntent: nlpResult.intent || "unknown",
    confidence: nlpResult.confidence || 0,
  });

  return {
    status: "success",
    method: "fallback",
    intent: "unknown",
    confidence: nlpResult.confidence || 0,
    response:
      "Sorry, I could not understand your question. It has been saved for admin review.",
  };
};

module.exports = { handleChat };