function CareerPaths() {
  const roles = [
    {
      title: "Software Engineer",
      icon: "💻",
    },
    {
      title: "Full Stack Developer",
      icon: "🌐",
    },
    {
      title: "AI Engineer",
      icon: "🤖",
    },
    {
      title: "Data Scientist",
      icon: "📊",
    },
    {
      title: "Data Analyst",
      icon: "📈",
    },
    {
      title: "Cloud Engineer",
      icon: "☁️",
    },
    {
      title: "Cyber Security",
      icon: "🔐",
    },
    {
      title: "DevOps Engineer",
      icon: "⚙️",
    },
    {
      title: "UI/UX Designer",
      icon: "🎨",
    },
  ];

  return (
    <section
      id="about"
      className="career-section"
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
          CAREER OPPORTUNITIES
        </p>

        <h2>Explore Career Paths</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto 0",
            color: "#6B7280",
            lineHeight: "1.8",
          }}
        >
          Discover diverse technology careers and
          understand the skills required to excel
          in each domain.
        </p>
      </div>

      <div className="career-grid">
        {roles.map((role) => (
          <div
            key={role.title}
            className="career-card"
            style={{
              padding: "35px",
            }}
          >
            <div
              style={{
                fontSize: "40px",
                marginBottom: "15px",
              }}
            >
              {role.icon}
            </div>

            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {role.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CareerPaths;