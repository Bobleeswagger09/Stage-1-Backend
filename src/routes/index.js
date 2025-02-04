// src/routes/numberRoutes.js
const express = require("express");
const router = express.Router();
const { classifyNumber } = require("../controllers/numberController");
const {
  redirectToClassifyNumber,
} = require("../controllers/redirectController");

// Route to classify the number (e.g. /api/classify-number?number=9)
router.get("/classify-number", classifyNumber);

// Root route that will redirect to /api/classify-number?number=9
router.get("/", redirectToClassifyNumber);

module.exports = router;
