function Timeline() {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      desc: "Register and set up your student profile in minutes.",
    },
    {
      number: "02",
      title: "Skill Assessment",
      desc: "Analyze your current skills and career interests.",
    },
    {
      number: "03",
      title: "AI Roadmap",
      desc: "Receive a personalized learning roadmap.",
    },
    {
      number: "04",
      title: "Track Progress",
      desc: "Monitor your readiness score and improvements.",
    },
    {
      number: "05",
      title: "AI Mentor",
      desc: "Get instant career guidance and interview help.",
    },
    {
      number: "06",
      title: "Get Placement Ready",
      desc: "Become confident and job-ready for placements.",
    },
  ];

  return (
    <section className="timeline-section">
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
          HOW IT WORKS
        </p>

        <h2>Your Journey To Placement Success</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto 0",
            color: "#6B7280",
            lineHeight: "1.8",
          }}
        >
          Follow a structured, AI-powered pathway
          from skill assessment to placement
          readiness.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        {steps.map((step) => (
          <div
            key={step.number}
            style={{
              background: "#FFFFFF",
              borderRadius: "20px",
              padding: "30px",
              boxShadow:
                "0 8px 30px rgba(0,0,0,0.08)",
              border: "1px solid #E6D5C3",
            }}
          >
            <div
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "14px",
                background: "#B67B4D",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              {step.number}
            </div>

            <h3
              style={{
                marginBottom: "12px",
                color: "#2B2B2B",
              }}
            >
              {step.title}
            </h3>

            <p
              style={{
                color: "#6B7280",
                lineHeight: "1.7",
              }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;