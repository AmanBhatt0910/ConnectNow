"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Smile, Paperclip } from "lucide-react";
import Button from "@/components/common/Button";

export default function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-3 border-t border-gray-800 bg-[#151820] p-3 rounded-b-2xl"
    >
      <button className="text-gray-400 hover:text-blue-400 transition">
        <Smile className="w-5 h-5" />
      </button>
      <button className="text-gray-400 hover:text-blue-400 transition">
        <Paperclip className="w-5 h-5" />
      </button>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 bg-[#1a1d24] border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 focus:border-blue-500 outline-none"
      />

      <Button
        variant="primary"
        icon={Send}
        onClick={handleSend}
        disabled={!message.trim()}
      >
        Send
      </Button>
    </motion.div>
  );
}
