import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Add user's message
    const userMessage = { text: input, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');

    // Simulate a bot response after a short delay
    setTimeout(() => {
      let botResponse = '';
      if (userMessage.text.toLowerCase().includes('mentor')) {
        botResponse = "Great! To help you, I need to know your field of interest. Are you looking for a mentor in tech, marketing, or design?";
      } else if (userMessage.text.toLowerCase().includes('tech')) {
        botResponse = "Okay, what specific skills are you interested in, like Python or JavaScript?";
      } else {
        botResponse = "I'm still learning! Please try asking about 'mentors' or 'skills'.";
      }
      setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed bottom-24 right-6 w-80 h-[400px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold">SkillDossier Chatbot</h3>
              <button onClick={() => setIsOpen(false)} className="hover:text-gray-200 transition-colors">
                <X size={20} />
              </button>
            </div>
            
            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg max-w-[80%] ${
                    msg.sender === 'user' 
                      ? 'bg-blue-100 dark:bg-blue-700 text-gray-800 dark:text-white ml-auto' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mr-auto'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
              />
              <motion.button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;