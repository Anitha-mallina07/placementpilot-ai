import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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
      const res = await axios.post(
        `${API_URL}/api/auth/register`,
        formData
      );

      if (res.data.success) {
        alert("Registration Successful");
        navigate("/login");
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F7F2EB",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(450px,1fr))",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE */}

        <div>
          <p
            style={{
              color: "#B67B4D",
              fontWeight: "600",
              letterSpacing: "2px",
              marginBottom: "15px",
            }}
          >
            GET STARTED
          </p>

          <h1
            style={{
              fontSize: "60px",
              lineHeight: "1.1",
              color: "#2B2B2B",
              marginBottom: "25px",
            }}
          >
            Build Your
            <br />
            Placement Future
          </h1>

          <p
            style={{
              color: "#6B7280",
              fontSize: "18px",
              lineHeight: "1.9",
              marginBottom: "30px",
            }}
          >
            Join PlacementPilot AI and unlock
            personalized career guidance,
            placement readiness analysis,
            AI mentoring, and structured
            learning roadmaps.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <div>✅ AI Career Analysis</div>
            <div>✅ Personalized Roadmaps</div>
            <div>✅ AI Mentor Support</div>
            <div>✅ Placement Readiness Score</div>
            <div>✅ Interview Preparation</div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <form
          onSubmit={handleSubmit}
          style={{
            background: "#FFFFFF",
            padding: "40px",
            borderRadius: "24px",
            border: "1px solid #E6D5C3",
            boxShadow:
              "0 8px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              color: "#2B2B2B",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            Create Account
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "12px",
              border: "1px solid #E6D5C3",
              background: "#FAFAFA",
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "12px",
              border: "1px solid #E6D5C3",
              background: "#FAFAFA",
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "12px",
              border: "1px solid #E6D5C3",
              background: "#FAFAFA",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "12px",
              background: "#B67B4D",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Create Account
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#6B7280",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#B67B4D",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;