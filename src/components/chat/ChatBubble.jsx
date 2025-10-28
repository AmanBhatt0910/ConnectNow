"use client";
import { motion } from "framer-motion";
import Avatar from "@/components/common/Avatar";

export default function ChatBubble({ message, isSender, time, avatar }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-end gap-2 mb-3 ${
        isSender ? "justify-end" : "justify-start"
      }`}
    >
      {!isSender && <Avatar src={avatar} alt="User" size={32} />}

      <div
        className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
          isSender
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-[#1e222b] text-gray-200 rounded-bl-none"
        }`}
      >
        {message}
        <div className="text-[10px] text-gray-400 mt-1 text-right">{time}</div>
      </div>

      {isSender && <Avatar src={avatar} alt="You" size={32} />}
    </motion.div>
  );
}
