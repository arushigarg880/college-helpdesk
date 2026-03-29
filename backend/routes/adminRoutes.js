
const express = require("express");
const router = express.Router();
const { getAllFeedbacks } = require("../controllers/adminController");

router.get("/feedbacks", getAllFeedbacks);

module.exports = router;