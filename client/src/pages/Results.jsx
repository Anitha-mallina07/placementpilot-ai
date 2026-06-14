import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

function Results() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/api/students/analysis/${id}`
        );

        setStudent(res.data.student);
        setAnalysis(res.data.analysis);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, [id]);

  const scoreMatch = analysis.match(/(\d+)\/100/);

  const readinessScore = scoreMatch
    ? parseInt(scoreMatch[1])
    : 60;

  const downloadReport = () => {
    const report = `
PLACEMENTPILOT AI REPORT

Name: ${student?.name}
Email: ${student?.email}
Branch: ${student?.branch}
Year: ${student?.year}

Skills:
${student?.skills?.join(", ")}

Target Role:
${Array.isArray(student?.targetRole)
  ? student.targetRole.join(", ")
  : student?.targetRole}

${analysis}
`;

    const blob = new Blob([report], {
      type: "text/plain",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "PlacementPilot_Report.txt";
    link.click();
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#F7F2EB",
        }}
      >
        <h2 style={{ color: "#6B7280" }}>
          Generating AI Analysis...
        </h2>
      </div>
    );
  }

  const cardStyle = {
    background: "#FFFFFF",
    borderRadius: "20px",
    padding: "25px",
    border: "1px solid #E6D5C3",
    boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
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
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            ...cardStyle,
            marginBottom: "25px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#2B2B2B",
              marginBottom: "10px",
              fontSize: "42px",
            }}
          >
            PlacementPilot AI Analysis
          </h1>

          <p
            style={{
              color: "#6B7280",
            }}
          >
            Personalized Career Readiness Report
          </p>
        </div>

        {/* STUDENT DETAILS */}

        <div
          style={{
            ...cardStyle,
            marginBottom: "25px",
          }}
        >
          <h2
            style={{
              color: "#B67B4D",
              marginBottom: "20px",
            }}
          >
            Student Profile
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "15px",
              color: "#4B5563",
            }}
          >
            <p>
              <strong>Name:</strong> {student?.name}
            </p>

            <p>
              <strong>Email:</strong> {student?.email}
            </p>

            <p>
              <strong>Branch:</strong> {student?.branch}
            </p>

            <p>
              <strong>Year:</strong> {student?.year}
            </p>
          </div>

          <div
            style={{
              marginTop: "20px",
            }}
          >
            <strong
              style={{
                color: "#2B2B2B",
              }}
            >
              Skills
            </strong>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              {student?.skills?.map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: "#F5E8D8",
                    color: "#8B5E3C",
                    padding: "8px 14px",
                    borderRadius: "30px",
                    fontWeight: "600",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SCORE + CAREERS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 2fr",
            gap: "25px",
            marginBottom: "25px",
          }}
        >
          <div style={cardStyle}>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#2B2B2B",
              }}
            >
              Readiness Score
            </h3>

            <div
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: "#F5E8D8",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "50px",
                fontWeight: "bold",
                color: "#B67B4D",
              }}
            >
              {readinessScore}%
            </div>
          </div>

          <div style={cardStyle}>
            <h3
              style={{
                marginBottom: "20px",
                color: "#2B2B2B",
              }}
            >
              Recommended Career Paths
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              {[
                "Software Engineer",
                "Full Stack Developer",
                "Cloud Engineer",
                "AI Engineer",
              ].map((career) => (
                <span
                  key={career}
                  style={{
                    background: "#F5E8D8",
                    color: "#8B5E3C",
                    padding: "12px 18px",
                    borderRadius: "30px",
                    fontWeight: "600",
                  }}
                >
                  {career}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* AI ANALYSIS */}

        <div style={cardStyle}>
          <h2
            style={{
              marginBottom: "20px",
              color: "#B67B4D",
            }}
          >
            AI Career Analysis
          </h2>

          <div
            style={{
              background: "#FAF7F2",
              border: "1px solid #E8DED1",
              borderRadius: "15px",
              padding: "25px",
              color: "#374151",
              lineHeight: "1.9",
              whiteSpace: "pre-wrap",
              maxHeight: "700px",
              overflowY: "auto",
            }}
          >
            {analysis}
          </div>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "25px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={downloadReport}
              style={{
                flex: 1,
                padding: "15px",
                border: "none",
                borderRadius: "12px",
                background: "#B67B4D",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Download Report
            </button>

            <button
              onClick={() =>
                navigate("/student-profile")
              }
              style={{
                flex: 1,
                padding: "15px",
                border: "1px solid #B67B4D",
                borderRadius: "12px",
                background: "#FFFFFF",
                color: "#B67B4D",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Analyze Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;