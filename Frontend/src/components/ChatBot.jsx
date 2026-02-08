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

    setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_Backend_url}/aiagent/chat`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
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
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed bottom-24 right-6 w-80 h-[420px]
      bg-white dark:bg-[#0f0f0f]
      border border-black/10 dark:border-white/10
      rounded-xl shadow-xl z-50 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3
        border-b border-black/10 dark:border-white/10">
        <div className="flex items-center gap-2">
          <FaRobot className="text-orange-500" />
          <span className="font-semibold text-black dark:text-white">
            ArraySoft AI
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
        >
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
                ? "bg-gray-100 text-gray-700 dark:bg-[#1a1a1a] dark:text-gray-300 self-start"
                : "bg-orange-500 text-white self-end ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div
            className="px-3 py-2 rounded-lg w-fit
            bg-gray-100 text-gray-500
            dark:bg-[#1a1a1a] dark:text-gray-400"
          >
            Typing...
          </div>
        )}
      </div>

      {/* Input */}
      <div
        className="p-3 border-t
        border-black/10 dark:border-white/10 flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 rounded outline-none text-sm
          bg-gray-100 text-black placeholder-gray-500
          dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-400"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-orange-500 px-3 rounded text-white
          hover:bg-orange-600 disabled:opacity-60"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
