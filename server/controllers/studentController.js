require("dotenv").config();

const StudentProfile = require("../models/StudentProfile");
const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// CREATE PROFILE
const createProfile = async (req, res) => {
  try {
    const profile = await StudentProfile.create(req.body);

    res.status(201).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// AI ANALYSIS
const getAIAnalysis = async (req, res) => {
  try {
    const student = await StudentProfile.findById(
      req.params.id
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    const prompt = `
You are an expert placement mentor and career coach.

Analyze this student profile:

Name: ${student.name}
Branch: ${student.branch}
Year: ${student.year}
Skills: ${student.skills.join(", ")}
Target Role: ${student.targetRole}

Provide:

1. Readiness Score (/100)
2. Strengths
3. Missing Skills
4. Learning Roadmap
5. Interview Preparation Tips
6. Recommended Projects
7. Career Advice

Format beautifully using headings and bullet points.
`;

    const completion =
      await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        model: "llama-3.3-70b-versatile",
      });

    const analysis =
      completion.choices[0].message.content;

    res.status(200).json({
      success: true,
      student,
      analysis,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// AI CHATBOT
const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    const completion =
      await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are PlacementPilot AI, a friendly placement mentor helping students with DSA, projects, interviews, resumes, aptitude, communication skills and career guidance.",
          },
          {
            role: "user",
            content: message,
          },
        ],
        model: "llama-3.3-70b-versatile",
      });

    const reply =
      completion.choices[0].message.content;

    res.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      reply:
        "AI service is temporarily unavailable.",
    });
  }
};

module.exports = {
  createProfile,
  getAIAnalysis,
  chatWithAI,
};