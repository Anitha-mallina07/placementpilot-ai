const express = require("express");

const router = express.Router();

const {
  createProfile,
  getAIAnalysis,
  chatWithAI,
} = require("../controllers/studentController");

router.post("/create", createProfile);

router.get("/analysis/:id", getAIAnalysis);

router.post("/chat", chatWithAI);

router.get("/check", (req, res) => {
  res.send("Student Route Working");
});

module.exports = router;