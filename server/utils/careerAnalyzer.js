const roleRequirements = {
  "Full Stack Developer": [
    "React",
    "Node.js",
    "MongoDB",
    "Git",
    "SQL",
  ],

  "AI Engineer": [
    "Python",
    "Machine Learning",
    "Git",
    "SQL",
  ],

  "Cloud Engineer": [
    "AWS",
    "Docker",
    "Linux",
    "Git",
  ],
};

const analyzeCareer = (skills, role) => {
  const required =
    roleRequirements[role] || [];

  const missingSkills =
    required.filter(
      (skill) => !skills.includes(skill)
    );

  const score = Math.round(
    ((required.length -
      missingSkills.length) /
      required.length) *
      100
  );

  return {
    score,
    missingSkills,
  };
};

module.exports = analyzeCareer;