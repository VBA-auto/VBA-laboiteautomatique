"use client";

import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { PiArrowCircleUpRightFill } from "react-icons/pi";
import conversationLogic from "./conversationLogic";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [disableInput, setDisableInput] = useState(true); // Disable input initially
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const [step, setStep] = useState(0); // Step tracker for "Need Help" flow

  const chatContainerRef = useRef(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDisableInput(false);
    const botMessage = {
      text:
        option === "needHelp"
          ? "Which car do you have now?"
          : "Option 2 functionality is coming soon!",
      sender: "bot",
    };
    setMessages((prev) => [...prev, botMessage]);
    if (option === "needHelp") setStep(1); // Start "Need Help" flow
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let botMessage = { text: "", sender: "bot" };

      if (selectedOption === "needHelp") {
        botMessage = conversationLogic(input, step, setStep); // Pass input and step to conversation logic
      } else {
        botMessage.text = "Option 2 is not implemented yet.";
      }

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
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
          <div className="p-4 border-b bg-[#2C80EF] text-white rounded-lg">
            VBA - AI Assistant{" "}
            <span className="text-xs bg-white text-blue-600 px-2 rounded-lg">
              Beta 1.0
            </span>
          </div>
          <div
            className="p-4 h-80 overflow-y-auto flex flex-col space-y-2"
            ref={chatContainerRef}
          >
            {!selectedOption ? (
              <>
                <p className="text-center text-sm">
                  Hello! How can I assist you?
                </p>
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => handleOptionSelect("needHelp")}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Need Help?
                  </button>
                  <button
                    onClick={() => handleOptionSelect("lookingForProducts")}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Looking for Products
                  </button>
                </div>
              </>
            ) : (
              messages.map((msg, index) => (
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
                      unoptimized
                      width={150}
                      height={100}
                      src={msg.image}
                      alt="Response Visual"
                      className="mt-2 max-w-full rounded-lg"
                    />
                  )}
                </div>
              ))
            )}
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
              disabled={disableInput}
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 px-4 py-2 bg-[#2C80EF] text-white rounded-lg hover:bg-blue-700 transition"
              disabled={disableInput}
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
