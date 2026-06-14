import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/login");
  };

  const cardStyle = {
    background: "#FFFFFF",
    borderRadius: "24px",
    padding: "30px",
    border: "1px solid #E6D5C3",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F7F2EB",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
        }}
      >
        {/* HERO */}

        <div
          style={{
            ...cardStyle,
            marginBottom: "30px",
            background:
              "linear-gradient(135deg,#FFFFFF,#F4E9DB)",
          }}
        >
          <p
            style={{
              color: "#B67B4D",
              fontWeight: "600",
              letterSpacing: "2px",
              marginBottom: "10px",
            }}
          >
            DASHBOARD
          </p>

          <h1
            style={{
              fontSize: "52px",
              color: "#2B2B2B",
              marginBottom: "10px",
            }}
          >
            Welcome Back,
            <br />
            {user?.name || "Student"} 👋
          </h1>

          <p
            style={{
              color: "#6B7280",
              lineHeight: "1.8",
              maxWidth: "700px",
            }}
          >
            Track your placement journey,
            improve your skills, receive AI
            guidance and become job-ready with
            PlacementPilot AI.
          </p>
        </div>

        {/* AIM */}

        <div
          style={{
            ...cardStyle,
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              color: "#B67B4D",
              marginBottom: "15px",
            }}
          >
            🎯 About PlacementPilot AI
          </h2>

          <p
            style={{
              color: "#5A5A5A",
              lineHeight: "1.9",
            }}
          >
            PlacementPilot AI is an intelligent
            career guidance platform designed for
            students. It helps identify skill
            gaps, generate personalized learning
            roadmaps, provide AI-powered career
            mentorship, improve interview
            readiness, and support students in
            achieving placement success.
          </p>
        </div>

        {/* MAIN FEATURES */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "25px",
          }}
        >
          {/* CAREER ANALYSIS */}

          <div style={cardStyle}>
            <div
              style={{
                fontSize: "45px",
                marginBottom: "15px",
              }}
            >
              🚀
            </div>

            <h2
              style={{
                color: "#2B2B2B",
                marginBottom: "15px",
              }}
            >
              Career Analysis
            </h2>

            <p
              style={{
                color: "#6B7280",
                lineHeight: "1.8",
                marginBottom: "25px",
              }}
            >
              Generate a detailed AI report
              including readiness score,
              strengths, weaknesses, learning
              roadmap and project suggestions.
            </p>

            <button
              onClick={() =>
                navigate("/student-profile")
              }
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "12px",
                background: "#B67B4D",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Analyze My Career
            </button>
          </div>

          {/* AI MENTOR */}

          <div style={cardStyle}>
            <div
              style={{
                fontSize: "45px",
                marginBottom: "15px",
              }}
            >
              🤖
            </div>

            <h2
              style={{
                color: "#2B2B2B",
                marginBottom: "15px",
              }}
            >
              AI Mentor
            </h2>

            <p
              style={{
                color: "#6B7280",
                lineHeight: "1.8",
                marginBottom: "25px",
              }}
            >
              Ask questions about interviews,
              aptitude, DSA, projects, career
              growth and placement preparation.
            </p>

            <button
              onClick={() =>
                window.dispatchEvent(
                  new Event("openPlacementPilotAI")
                )
              }
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "12px",
                background: "#B67B4D",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Open AI Mentor
            </button>
          </div>

          {/* ACCOUNT */}

          <div style={cardStyle}>
            <div
              style={{
                fontSize: "45px",
                marginBottom: "15px",
              }}
            >
              🔐
            </div>

            <h2
              style={{
                color: "#2B2B2B",
                marginBottom: "15px",
              }}
            >
              Account
            </h2>

            <p
              style={{
                color: "#6B7280",
                lineHeight: "1.8",
                marginBottom: "25px",
              }}
            >
              Manage your account and securely
              access your placement preparation
              dashboard.
            </p>

            <button
              onClick={handleLogout}
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "12px",
                background: "#D9534F",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Logout
            </button>
          </div>
        </div>

        {/* ROADMAP */}

        <div
          style={{
            ...cardStyle,
            marginTop: "30px",
          }}
        >
          <h2
            style={{
              marginBottom: "25px",
              color: "#2B2B2B",
            }}
          >
            📈 Placement Success Journey
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
            }}
          >
            <div>
              <h3>1️⃣ Learn</h3>
              <p>DSA, Aptitude & Core Subjects</p>
            </div>

            <div>
              <h3>2️⃣ Build</h3>
              <p>Projects & Portfolio</p>
            </div>

            <div>
              <h3>3️⃣ Practice</h3>
              <p>Mock Interviews & Coding</p>
            </div>

            <div>
              <h3>4️⃣ Achieve</h3>
              <p>Internships & Placements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;