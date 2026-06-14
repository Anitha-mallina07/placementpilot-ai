import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

function ProfileForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "",
    year: "",
    skills: [],
    targetRole: [],
  });

  const skillsList = [
    "React",
    "Node.js",
    "MongoDB",
    "Java",
    "Python",
    "SQL",
    "AWS",
    "Docker",
  ];

  const rolesList = [
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Data Scientist",
    "Cloud Engineer",
    "Cyber Security",
    "UI/UX Designer",
    "DevOps Engineer",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSkillChange = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => ({
      ...prev,
      targetRole: prev.targetRole.includes(role)
        ? prev.targetRole.filter((r) => r !== role)
        : [...prev.targetRole, role],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${API_URL}/api/students/create`,
        formData
      );

      const id = res.data.data._id;

      navigate(`/results/${id}`);
    } catch (error) {
      console.error(error);
      alert("Error saving profile");
    }
  };

  return (
    <div className="form-card">
      <h2>Create Profile</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="branch"
          placeholder="Branch"
          value={formData.branch}
          onChange={handleChange}
        />

        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
        />

        <h3>Select Skills</h3>

        <div className="checkbox-group">
          {skillsList.map((skill) => (
            <label
              key={skill}
              className="checkbox-item"
            >
              <input
                type="checkbox"
                checked={formData.skills.includes(
                  skill
                )}
                onChange={() =>
                  handleSkillChange(skill)
                }
              />
              {skill}
            </label>
          ))}
        </div>

        <h3>Target Roles</h3>

        <div className="checkbox-group">
          {rolesList.map((role) => (
            <label
              key={role}
              className="checkbox-item"
            >
              <input
                type="checkbox"
                checked={formData.targetRole.includes(
                  role
                )}
                onChange={() =>
                  handleRoleChange(role)
                }
              />
              {role}
            </label>
          ))}
        </div>

        <button type="submit">
          Analyze My Career 🚀
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;