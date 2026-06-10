import { FaBrain, FaRoad, FaChartLine, FaUserTie } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaBrain />,
      title: "Skill Gap Analysis",
      desc: "Discover missing skills required for top companies."
    },
    {
      icon: <FaRoad />,
      title: "Personalized Roadmap",
      desc: "Get AI-generated learning roadmaps."
    },
    {
      icon: <FaChartLine />,
      title: "Readiness Score",
      desc: "Track placement readiness continuously."
    },
    {
      icon: <FaUserTie />,
      title: "Mock Interviews",
      desc: "Practice HR and technical interviews."
    }
  ];

  return (
    <section className="features-section">
      <h2>Why PlacementPilot?</h2>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
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