const natural = require("natural");
const Intent = require("../models/Intent");

let classifier = new natural.BayesClassifier();
let trained = false;

const trainClassifier = async () => {
  try {
    classifier = new natural.BayesClassifier();
    trained = false;

    const intents = await Intent.find({});
    console.log("INTENTS FOUND:", intents.length);

    if (!intents.length) {
      console.log("No intents found for training");
      return;
    }

    intents.forEach((item) => {
      console.log("Training intent:", item.intent);

      item.patterns.forEach((pattern) => {
        classifier.addDocument(pattern.toLowerCase(), item.intent);
      });
    });

    classifier.train();
    trained = true;
    console.log("NLP trained successfully");
  } catch (error) {
    console.error("NLP training failed:", error.message);
  }
};

const detectIntent = async (message) => {
  if (!trained) {
    await trainClassifier();
  }

  if (!trained) {
    return { intent: null, confidence: 0 };
  }

  const results = classifier.getClassifications(message.toLowerCase());
  console.log("CLASSIFICATIONS:", results);

  if (!results.length) {
    return { intent: null, confidence: 0 };
  }

  return {
    intent: results[0].label,
    confidence: results[0].value,
  };
};

module.exports = {
  trainClassifier,
  detectIntent,
};