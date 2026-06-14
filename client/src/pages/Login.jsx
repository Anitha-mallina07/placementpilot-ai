import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
        `${API_URL}/api/auth/login`,
        formData
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
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
            WELCOME BACK
          </p>

          <h1
            style={{
              fontSize: "60px",
              lineHeight: "1.1",
              color: "#2B2B2B",
              marginBottom: "25px",
            }}
          >
            Continue Your
            <br />
            Placement Journey
          </h1>

          <p
            style={{
              color: "#6B7280",
              fontSize: "18px",
              lineHeight: "1.9",
              marginBottom: "30px",
            }}
          >
            Access AI-powered career guidance,
            placement readiness analysis,
            interview preparation and personalized
            learning roadmaps.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <div>🚀 AI Career Analysis</div>
            <div>📈 Readiness Score</div>
            <div>🤖 AI Mentor</div>
            <div>🎯 Personalized Roadmaps</div>
            <div>💼 Interview Preparation</div>
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
            Login
          </h2>

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
            Login
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#6B7280",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{
                color: "#B67B4D",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;