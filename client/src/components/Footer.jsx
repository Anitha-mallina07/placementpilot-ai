function Footer() {
  return (
    <footer
      className="footer"
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #E6D5C3",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <h2
          style={{
            color: "#2B2B2B",
            fontWeight: "700",
          }}
        >
          PlacementPilot AI
        </h2>

        <p
          style={{
            color: "#6B7280",
            maxWidth: "600px",
            textAlign: "center",
            lineHeight: "1.8",
          }}
        >
          Empowering students with AI-driven
          career guidance, placement preparation,
          skill analysis, and personalized learning
          roadmaps.
        </p>

        <div
          style={{
            marginTop: "10px",
            color: "#8A8178",
            fontSize: "14px",
          }}
        >
          © 2026 PlacementPilot AI. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;