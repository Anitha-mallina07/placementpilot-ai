import { useState } from "react";
import axios from "axios";

function ChatBot() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!message.trim()) return;

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/students/chat",
        {
          message,
        }
      );

      setReply(res.data.reply);
    } catch (error) {
      console.log(error);

      setReply(
        "Unable to connect with AI right now."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-card">
      <h2>💬 PlacementPilot Career Mentor</h2>

      <input
        type="text"
        placeholder="Ask career questions..."
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <button onClick={askAI}>
        Ask AI
      </button>

      {loading && (
        <p>Thinking...</p>
      )}

      {reply && (
        <div className="reply-box">
          <h3>AI Response</h3>
          <p>{reply}</p>
        </div>
      )}
    </div>
  );
}

export default ChatBot;