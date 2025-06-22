"use client";

import { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botReply = data.message || "Sorry, I couldn't understand that.";

      setMessages([...newMessages, { sender: "bot", text: botReply }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { sender: "bot", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Floating Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          {open ? <FaTimes size={20} /> : <FaComments size={20} />}
        </button>
      </div>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-6 z-40 w-[320px] sm:w-[380px] bg-white border rounded-2xl shadow-xl flex flex-col overflow-hidden animate-fadeIn">
          <div className="bg-blue-600 text-white p-4 font-semibold">
            Chat with us
          </div>

          <div className="flex-1 p-3 overflow-y-auto max-h-80 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-md w-fit max-w-[85%] ${
                  msg.sender === "user"
                    ? "ml-auto bg-blue-100 text-right"
                    : "bg-gray-100"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bg-gray-100 p-2 rounded-md w-fit animate-pulse">
                Typing...
              </div>
            )}
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 bg-white text-black border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
