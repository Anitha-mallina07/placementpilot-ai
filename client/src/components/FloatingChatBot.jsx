import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

function FloatingChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

 const location = useLocation();

useEffect(() => {
  const openChat = () => {
    setOpen(true);
  };

  window.addEventListener(
    "openPlacementPilotAI",
    openChat
  );

  return () => {
    window.removeEventListener(
      "openPlacementPilotAI",
      openChat
    );
  };
}, []);

if (
  location.pathname === "/login" ||
  location.pathname === "/register"
) {
  return null;
}

  const askAI = async () => {
    if (!message.trim()) return;

    const userMessage = {
      type: "user",
      text: message,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    try {
      setLoading(true);

      const res = await axios.post(
        `${API_URL}/api/students/chat`,
        {
          message,
        }
      );

      const aiMessage = {
        type: "ai",
        text: res.data.reply,
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

      setMessage("");
    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text:
            "Unable to connect with AI right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          fontSize: "28px",
          background: "#7c3aed",
          color: "white",
          zIndex: 9999,
          boxShadow:
            "0 0 25px rgba(124,58,237,0.7)",
        }}
      >
        💬
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "110px",
            right: "25px",
            width: "380px",
            background: "#111827",
            color: "white",
            padding: "20px",
            borderRadius: "20px",
            zIndex: 9999,
            boxShadow:
              "0 0 25px rgba(0,0,0,0.4)",
          }}
        >
          <h3>🚀 PlacementPilot AI</h3>

          <div
            style={{
              height: "300px",
              overflowY: "auto",
              marginBottom: "10px",
              padding: "10px",
              background: "#0f172a",
              borderRadius: "10px",
            }}
          >
            {messages.length === 0 && (
              <p style={{ color: "#9ca3af" }}>
                Ask me anything about placements,
                DSA, projects, interviews or careers.
              </p>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent:
                    msg.type === "user"
                      ? "flex-end"
                      : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px",
                    borderRadius: "12px",
                    background:
                      msg.type === "user"
                        ? "#7c3aed"
                        : "#1f2937",
                    lineHeight: "1.5",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <p>🤖 Thinking...</p>
            )}
          </div>

          <input
            type="text"
            placeholder="Ask anything..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={(e) =>
              e.key === "Enter" && askAI()
            }
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              border: "none",
            }}
          />

          <button
            onClick={askAI}
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "10px",
              border: "none",
              borderRadius: "10px",
              background: "#7c3aed",
              color: "white",
              cursor: "pointer",
            }}
          >
            Ask AI
          </button>
        </div>
      )}
    </>
  );
}

export default FloatingChatBot;