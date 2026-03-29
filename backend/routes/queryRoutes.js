
const express = require("express");
const router = express.Router();

const {
  createQuery,
  getAllQueries,
  getQueryById,
  resolveQuery, // ✅ ADD THIS
} = require("../controllers/queryController");

router.post("/", createQuery);        // chatbot/admission
router.get("/", getAllQueries);       // admin
router.get("/:id", getQueryById);     // chatbot polling

// ✅ NEW ROUTE (VERY IMPORTANT)
router.put("/:id/resolve", resolveQuery);

module.exports = router;