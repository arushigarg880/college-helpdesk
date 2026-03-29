
const express = require("express");
const router = express.Router();
const { sendResponse } = require("../controllers/responseController");

router.post("/", sendResponse);

module.exports = router;