import { useState } from "react";
import axios from "axios";

function ProfileForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "",
    year: "",
    skills: "",
    targetRole: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/students/create",
        {
          ...formData,
          skills: formData.skills.split(","),
        }
      );

      alert("Profile Saved Successfully 🚀");
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
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="text"
          name="branch"
          placeholder="Branch"
          onChange={handleChange}
        />

        <input
          type="number"
          name="year"
          placeholder="Year"
          onChange={handleChange}
        />

        <input
          type="text"
          name="skills"
          placeholder="React, NodeJS, MongoDB"
          onChange={handleChange}
        />

        <input
          type="text"
          name="targetRole"
          placeholder="Target Role"
          onChange={handleChange}
        />

        <button type="submit">
          Analyze My Career 🚀
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;