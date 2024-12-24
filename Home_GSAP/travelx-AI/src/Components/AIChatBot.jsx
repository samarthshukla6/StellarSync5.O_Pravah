import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import "./AIChatBot.css";

function convertToBold(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
}

function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    {
      role: "model",
      parts: "Welcome to Sahyog! How can I help you today?",
    },
  ]);
  const [chats, setChats] = useState([
    {
      sender: "bot",
      message: "Welcome to Sahyog! How can I help you today?",
    },
  ]);
  const [isBotResponding, setIsBotResponding] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state
  const chatbotRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      chatbotRef.current &&
      !chatbotRef.current.contains(event.target) &&
      toggleButtonRef.current &&
      !toggleButtonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Scroll to the bottom when the chatbot opens
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    // Scroll to the bottom whenever chats change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  useEffect(() => {
    const fetchBotResponse = async () => {
      if (isBotResponding) {
        try {
          const response = await axios.post(
            "https://gemini-powered-robust-chatbot-dlg4.vercel.app/chat",
            {
              question: chats[chats.length - 1].message,
              history: [...history],
            }
          );
          const botMessage = response.data.response;
          setHistory(response.data.history);

          setChats((prevChats) => [
            ...prevChats,
            { sender: "bot", message: botMessage },
          ]);
          console.log(response.data);
          console.log(history);
        } catch (error) {
          console.error(error);
        } finally {
          setIsBotResponding(false);
        }
      }
    };

    fetchBotResponse();
  }, [isBotResponding, chats, history]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputRef.current.value && !isBotResponding) {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = inputRef.current.value.trim();
    if (message) {
      setChats((prevChats) => [...prevChats, { sender: "user", message }]);
      inputRef.current.value = ""; // Clear input
      setIsBotResponding(true); // Indicate the bot is responding
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <button
        ref={toggleButtonRef}
        className="fixed bottom-4 z-50 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 p-0 normal-case leading-5 hover:text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        data-state={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white block border-gray-200 align-middle dark:stroke-gray-300"
        >
          <path
            d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
            className="border-gray-200 dark:stroke-gray-300"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div
          ref={chatbotRef}
          className={`fixed z-50 bottom-[calc(4rem+1.5rem)] right-4 bg-white dark:bg-gray-800 p-6 rounded-lg border border-[#e5e7eb] dark:border-gray-700 w-[90%] max-w-md h-[80vh] sm:w-[400px] sm:h-[550px] shadow-lg flex flex-col`}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col space-y-1.5">
              <h2 className="font-semibold text-lg tracking-tight text-gray-900 dark:text-white">
                Sahyog
              </h2>
              <p className="text-sm text-[#6b7280] dark:text-gray-400 leading-3">
                Your FineTuned Travel Manager
              </p>
            </div>
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                // Sun icon for light mode
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12.34h-1m15.36 4.95l-.707-.707M6.343 6.343l-.707-.707m12.02 12.02l-.707-.707M6.343 17.657l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z"
                  />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="h-0.5 bg-black opacity-10 rounded-full dark:bg-white m-4"></div>
          <div
            ref={chatContainerRef}
            className="flex-1 pr-4 mb-4 overflow-y-auto custom-scrollbar"
          >
            {chats.map((chat, index) => (
              <div key={index}>
                {chat.sender === "bot" ? (
                  <div className="flex gap-3 my-4 text-gray-600 dark:text-gray-300 text-sm">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                      <div className="rounded-full bg-gray-100 dark:bg-gray-700 border"></div>
                    </span>
                    <p className="leading-relaxed">
                      <span className="block font-bold text-gray-700 dark:text-gray-100">
                        Sahyog
                      </span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: convertToBold(chat.message),
                        }}
                      />
                    </p>
                  </div>
                ) : (
                  <div className="flex gap-3 my-4 text-gray-600 dark:text-gray-300 text-sm justify-end">
                    <p className="leading-relaxed text-right">
                      <span className="block font-bold text-gray-700 dark:text-gray-100">
                        You
                      </span>
                      {chat.message}
                    </p>
                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
                      <div className="rounded-full bg-gray-100 dark:bg-gray-700 border p-1">
                        <svg
                          stroke="none"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 16 16"
                          height="30"
                          width="30"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-black dark:text-white"
                        >
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                        </svg>
                      </div>
                    </span>
                  </div>
                )}
              </div>
            ))}
            {isBotResponding && (
            <div className="flex gap-3 my-4 text-gray-600 dark:text-gray-300 text-sm">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 dark:bg-gray-700 border"></div>
              </span>
              <div className="typing-indicator">
                <span className="dot dot-1 bg-gray-400 dark:bg-gray-500"></span>
                <span className="dot dot-2 bg-gray-400 dark:bg-gray-500"></span>
                <span className="dot dot-3 bg-gray-400 dark:bg-gray-500"></span>
              </div>
            </div>

            )}
          </div>
          <div className="flex items-center pt-0">
            <form
              className="flex items-center justify-center w-full space-x-2"
              onSubmit={handleSubmit}
            >
              <input
                ref={inputRef}
                className="flex h-10 w-full rounded-md border border-[#e5e7eb] dark:border-gray-700 bg-white dark:bg-gray-700 px-3 py-2 text-sm placeholder-[#6b7280] dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9ca3af] dark:focus:ring-[#4b5563] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] dark:text-white focus-visible:ring-offset-2"
                placeholder="Type your message"
                type="text"
                required
                onKeyDown={handleKeyDown}
              />
              <button
                type="submit"
                className={`inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] dark:text-gray-900 disabled:pointer-events-none disabled:opacity-50 bg-black dark:bg-gray-600 hover:bg-[#111827E6] dark:hover:bg-gray-500 h-10 px-4 py-2 ${
                  isBotResponding ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isBotResponding}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIChatBot;
