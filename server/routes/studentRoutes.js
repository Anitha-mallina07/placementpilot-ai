const express = require("express");

const router = express.Router();

const {
  createProfile,
} = require("../controllers/studentController");

router.post("/create", createProfile);

module.exports = router;