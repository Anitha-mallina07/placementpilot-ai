import {
  FaBrain,
  FaRoad,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaBrain />,
      title: "Skill Gap Analysis",
      desc: "Identify missing skills and technologies required for your dream role and build a focused learning strategy.",
    },
    {
      icon: <FaRoad />,
      title: "Personalized Roadmap",
      desc: "Receive an AI-generated roadmap tailored to your current skills, academic background, and career goals.",
    },
    {
      icon: <FaChartLine />,
      title: "Readiness Score",
      desc: "Track your placement readiness through intelligent scoring and actionable improvement suggestions.",
    },
    {
      icon: <FaUserTie />,
      title: "Interview Preparation",
      desc: "Practice technical, aptitude, and HR interview questions with guidance from AI-powered mentoring.",
    },
  ];

  return (
    <section
      id="features"
      className="features-section"
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
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
          PLATFORM FEATURES
        </p>

        <h2>Everything You Need For Placements</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto 0",
            color: "#6B7280",
            lineHeight: "1.8",
          }}
        >
          A complete AI-powered platform designed
          to help students prepare smarter, identify
          opportunities, and secure their dream job.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
          >
            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;