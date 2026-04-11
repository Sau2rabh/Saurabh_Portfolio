"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Loader2 } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const JarvisAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I am Saurabh's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
      if (!apiKey) {
        throw new Error("Missing Gemini API Key");
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        systemInstruction: `You are 'My Portfolio AI', an intelligent assistant for Saurabh Anand's portfolio website.
Saurabh Anand is a passionate Frontend Developer & QA Associate with a focus on React and Next.js. He is currently studying at Chandigarh University. 
His technical skills include React, Next.js, Node.js, Express, MongoDB, MySQL, Python, Tailwind CSS, and AI/ML technologies.
His featured projects include:
1. Smart AI Health Predictor
2. Smart Career Roadmap Generator
3. Velora E-Commerce
4. GuptMilan
5. FinPulse
Contact information: royalking6993@gmail.com or +91-7322987155.
Always answer questions concisely, professionally, and creatively based on this real data about Saurabh. If a user asks something completely completely unrelated, politely guide them back to Saurabh's portfolio.`
      });

      // Prepare chat history (Gemini requires the first message in history to be from 'user')
      // Our UI starts with an 'assistant' greeting, so we filter it out of the API history.
      const formattedHistory = messages
        .filter((m, idx) => !(idx === 0 && m.role === "assistant"))
        .map((m) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        }));

      const chat = model.startChat({
        history: formattedHistory,
      });

      const result = await chat.sendMessage(userMsg.content);
      const responseText = result.response.text();

      setMessages((prev) => [...prev, { role: "assistant", content: responseText }]);
    } catch (error) {
      console.error("AI Error:", error);
      const errorMsg = error instanceof Error ? error.message : String(error);
      let friendlyMessage = "I'm having trouble connecting to my neural network right now. Please try again later or contact Saurabh directly!";
      
      if (errorMsg.includes("503") || errorMsg.includes("experiencing")) {
        friendlyMessage = "My AI servers are currently experiencing high traffic! Please wait a few seconds and try asking again, or use the contact form below.";
      }
      
      setMessages((prev) => [...prev, { role: "assistant", content: friendlyMessage }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-110 backdrop-blur-md bg-black/30 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-120">
        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[calc(100vw-3rem)] sm:w-[350px] md:w-[400px] h-[450px] sm:h-[500px] glass rounded-3xl border-cyan-400/30 flex flex-col overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.2)]"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-cyan-500/5">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center animate-pulse">
                  <Bot size={18} className="text-black" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">My Portfolio AI</h3>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-bounce"></div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={18} className="text-gray-400" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
            >
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] sm:max-w-[80%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user" 
                      ? "bg-cyan-500 text-black font-medium" 
                      : "glass border-white/5 text-gray-200"
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[80%] p-3 rounded-2xl text-xs glass border-white/5 text-gray-200 flex items-center space-x-2">
                    <Loader2 size={14} className="animate-spin text-cyan-400" />
                    <span className="text-gray-400 italic font-mono text-[10px] sm:text-xs">Analyzing...</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask me anything..."
                  className="w-full bg-slate-900/50 border border-white/10 rounded-full py-2 sm:py-2.5 pl-4 pr-12 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 sm:p-1.5 bg-cyan-500 rounded-full text-black hover:bg-cyan-400 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all ${
          isOpen ? "bg-red-500 rotate-90" : "bg-cyan-500"
        }`}
      >
        {isOpen ? <X className="text-white" /> : <MessageSquare className="text-black" />}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500 animate-ping opacity-50"></div>
        )}
      </motion.button>
      </div>
    </>
  );
};

export default JarvisAssistant;
