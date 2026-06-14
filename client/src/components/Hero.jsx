function Hero() {
  return (
    <section
      className="hero"
      style={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
        }}
      >
        <p
          style={{
            color: "#B67B4D",
            fontWeight: "600",
            letterSpacing: "2px",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}
        >
          AI-Powered Placement Preparation
        </p>

        <h1
          style={{
            fontSize: "78px",
            lineHeight: "1.1",
            marginBottom: "25px",
            color: "#2B2B2B",
          }}
        >
          Build Your Career
          <br />
          With Confidence
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            color: "#6B7280",
            maxWidth: "750px",
            margin: "auto",
          }}
        >
          PlacementPilot AI helps students discover
          career paths, identify skill gaps, generate
          personalized roadmaps, and prepare for
          placements using artificial intelligence.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#features"
            style={{
              textDecoration: "none",
              background: "#B67B4D",
              color: "white",
              padding: "16px 35px",
              borderRadius: "12px",
              fontWeight: "600",
              boxShadow:
                "0 8px 20px rgba(182,123,77,0.25)",
            }}
          >
            Explore Features
          </a>

          <a
            href="#about"
            style={{
              textDecoration: "none",
              background: "white",
              color: "#2B2B2B",
              padding: "16px 35px",
              borderRadius: "12px",
              fontWeight: "600",
              border: "1px solid #E6D5C3",
            }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;