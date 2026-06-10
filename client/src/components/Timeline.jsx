function Timeline() {
  const steps = [
    "Create Profile",
    "Skill Analysis",
    "Roadmap Generation",
    "Placement Tracking",
    "Mock Interviews",
    "Success Dashboard"
  ];

  return (
    <section className="timeline-section">
      <h2>How It Works</h2>

      <div className="timeline">
        {steps.map((step, index) => (
          <div className="timeline-card" key={index}>
            {step}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;