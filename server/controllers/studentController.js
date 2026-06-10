const StudentProfile = require("../models/StudentProfile");

// Create Student Profile
const createProfile = async (req, res) => {
  try {
    const profile = await StudentProfile.create(req.body);

    res.status(201).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProfile,
};