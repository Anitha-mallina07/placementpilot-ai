const mongoose = require("mongoose");

const StudentProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  branch: {
    type: String,
  },

  year: {
    type: Number,
  },

  skills: {
    type: [String],
    default: [],
  },

  targetRole: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "StudentProfile",
  StudentProfileSchema
);