function CareerPaths() {
  const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Data Scientist",
    "Data Analyst",
    "Cloud Engineer",
    "Cyber Security",
    "DevOps Engineer",
    "UI/UX Designer"
  ];

  return (
    <section className="career-section">
      <h2>Explore Career Paths</h2>

      <div className="career-grid">
        {roles.map((role) => (
          <div key={role} className="career-card">
            {role}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CareerPaths;