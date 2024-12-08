"use client";

import { useState, useEffect, useRef } from "react";
import { getBotResponse } from "./botLogic";
import Image from "next/image";
import Link from "next/link";
import { PiArrowCircleUpRightFill } from "react-icons/pi";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatContainerRef = useRef(null);

  const url = "/api/userPrompt";

  const storeUserPrompt = async (prompt) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userPrompt: prompt }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (!response.ok) {
        console.error("Error storing user prompt:", data.error);
      }
    } catch (error) {
      console.error("Failed to store user prompt:", error);
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true);

    // Simulate typing for the bot
    setTimeout(async () => {
      try {
        // Generate bot response
        const botResponse = getBotResponse(input);
        const botMessage = { ...botResponse, sender: "bot" };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);

        // Store the user prompt asynchronously in the background
        await storeUserPrompt(input);
      } catch (error) {
        console.error(
          "Failed to store user prompt or generate bot response:",
          error
        );
      } finally {
        setIsTyping(false);
      }
    }, 1000); // Delay to simulate typing
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 px-4 h-10 bg-[#2C80EF] text-white rounded-full shadow-lg flex justify-center items-center hover:bg-blue-700 transition"
      >
        VBA - AI
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-[350px] bg-white border rounded-lg shadow-lg z-50">
          <div className="p-4 border-b bg-[#2C80EF] text-white  rounded-lg">
            VBA - AI Assistant{" "}
            <span className="text-xs bg-white text-blue-600 px-2 rounded-lg">
              Beta 1.0
            </span>
          </div>
          <div
            className="p-4 h-80 overflow-y-auto flex flex-col space-y-2"
            ref={chatContainerRef}
          >
            <p className="text-sm text-center">
              ask anything about this website
            </p>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.sender === "user"
                    ? "self-end bg-blue-100 text-blue-800"
                    : "self-start bg-gray-100 text-gray-800"
                } px-3 py-2 rounded-lg max-w-xs`}
              >
                <p className="text-[15px]">{msg.text}</p>
                {msg.link && (
                  <Link
                    href={msg.link}
                    rel="noopener noreferrer"
                    className="text-[#2C80EF] underline text-sm"
                  >
                    Learn more
                  </Link>
                )}
                {msg.image && (
                  <Image
                    width={150}
                    height={100}
                    src={msg.image}
                    alt="Response Visual"
                    className="mt-2 max-w-full rounded-lg"
                  />
                )}
              </div>
            ))}
            {isTyping && (
              <div className="self-start text-gray-500 italic text-sm">
                Typing...
              </div>
            )}
          </div>
          <div className="p-2 flex items-center border-t">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2C80EF] bg-white"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 px-4 py-2 bg-[#2C80EF] text-white rounded-lg hover:bg-blue-700 transition"
            >
              <PiArrowCircleUpRightFill className="text-xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
