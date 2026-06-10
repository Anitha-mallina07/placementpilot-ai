import { useState } from "react";

function StudentProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    targetRole: "",
    skills: "",
    graduationYear: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="profile-container">
      <h1>Create Your Placement Profile</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
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
          name="targetRole"
          placeholder="Target Role"
          onChange={handleChange}
        />

        <input
          type="text"
          name="skills"
          placeholder="Current Skills"
          onChange={handleChange}
        />

        <input
          type="number"
          name="graduationYear"
          placeholder="Graduation Year"
          onChange={handleChange}
        />

        <button type="submit">
          Generate My Roadmap
        </button>
      </form>
    </div>
  );
}

export default StudentProfile;