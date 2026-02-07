import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 Welcome to ArraySoft. How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput("");

    // show user message instantly
    setMessages((prev) => [
      ...prev,
      { from: "user", text: userMessage },
    ]);

    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_Backend_url}/aiagent/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userInput: userMessage }),
        }
      );

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text:
            data?.recommendation ||
            "I can help you with services, courses or internships.",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed bottom-24 right-6 w-80 h-[420px] bg-[#0f0f0f]
      border border-white/10 rounded-xl shadow-xl z-50 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <FaRobot className="text-orange-500" />
          <span className="font-semibold">ArraySoft AI</span>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <FaTimes />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[80%] px-3 py-2 rounded-lg ${
              msg.from === "bot"
                ? "bg-[#1a1a1a] text-gray-300 self-start"
                : "bg-orange-500 text-white self-end ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="bg-[#1a1a1a] text-gray-400 px-3 py-2 rounded-lg w-fit">
            Typing...
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-white/10 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-[#1a1a1a] px-3 py-2 text-white rounded outline-none text-sm"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-orange-500 px-3 rounded text-white disabled:opacity-60"
          disabled={loading}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
