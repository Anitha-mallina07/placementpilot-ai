import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

function StudentProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    targetRole: "",
    skills: "",
    graduationYear: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        name: formData.name,
        email: formData.email,
        branch: "CSE",
        year: Number(formData.graduationYear),
        skills: formData.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter((skill) => skill !== ""),
        targetRole: [formData.targetRole],
      };

      const res = await axios.post(
        `${API_URL}/api/students/create`,
        payload
      );

      navigate(
        `/results/${res.data.data._id}`
      );
    } catch (error) {
      console.log(error);

      alert(
        "Failed to generate profile analysis."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    border: "1px solid #E6D5C3",
    borderRadius: "12px",
    fontSize: "15px",
    outline: "none",
    background: "#FAF7F2",
    color: "#2B2B2B",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F7F2EB",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            background: "#FFFFFF",
            padding: "35px",
            borderRadius: "20px",
            border: "1px solid #E6D5C3",
            boxShadow:
              "0 8px 25px rgba(0,0,0,0.06)",
            marginBottom: "25px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#2B2B2B",
              marginBottom: "12px",
              fontSize: "42px",
            }}
          >
            Placement Profile
          </h1>

          <p
            style={{
              color: "#6B7280",
              lineHeight: "1.8",
            }}
          >
            Tell us about yourself and let
            PlacementPilot AI generate a
            personalized career analysis,
            readiness score, skill-gap report,
            and learning roadmap.
          </p>
        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          style={{
            background: "#FFFFFF",
            padding: "35px",
            borderRadius: "20px",
            border: "1px solid #E6D5C3",
            boxShadow:
              "0 8px 25px rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(300px,1fr))",
              gap: "20px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#2B2B2B",
                  fontWeight: "600",
                }}
              >
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#2B2B2B",
                  fontWeight: "600",
                }}
              >
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#2B2B2B",
                  fontWeight: "600",
                }}
              >
                Target Role
              </label>

              <input
                type="text"
                name="targetRole"
                placeholder="Software Engineer"
                value={formData.targetRole}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#2B2B2B",
                  fontWeight: "600",
                }}
              >
                Graduation Year
              </label>

              <input
                type="number"
                name="graduationYear"
                placeholder="2027"
                value={formData.graduationYear}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#2B2B2B",
                fontWeight: "600",
              }}
            >
              Current Skills
            </label>

            <textarea
              name="skills"
              rows="5"
              placeholder="React, Node.js, MongoDB, AWS..."
              value={formData.skills}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                resize: "none",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: "25px",
              width: "100%",
              background: "#B67B4D",
              color: "#FFFFFF",
              border: "none",
              padding: "16px",
              borderRadius: "12px",
              fontWeight: "600",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {loading
              ? "Generating Analysis..."
              : "Generate AI Career Analysis"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentProfile;