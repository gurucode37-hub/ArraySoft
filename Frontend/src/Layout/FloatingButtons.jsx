import { FaWhatsapp, FaRobot } from "react-icons/fa";
import { useState } from "react";
import ChatBot from "../components/ChatBot.jsx";

const FloatingButtons = () => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/917383109386"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 
        bg-green-500 rounded-full flex items-center justify-center 
        text-white text-2xl shadow-lg
        hover:scale-110 transition"
      >
        <FaWhatsapp />
      </a>

      {/* AI Agent */}
      <button
        onClick={() => setOpenChat(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 
        bg-orange-500 rounded-full flex items-center justify-center 
        text-white text-2xl shadow-lg
        hover:scale-110 transition"
      >
        <FaRobot />
      </button>

      {/* ChatBot Popup */}
      {openChat && <ChatBot onClose={() => setOpenChat(false)} />}
    </>
  );
};

export default FloatingButtons;
