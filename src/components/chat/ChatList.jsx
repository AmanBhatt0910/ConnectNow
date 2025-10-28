"use client";
import { motion } from "framer-motion";
import Avatar from "@/components/common/Avatar";
import Badge from "@/components/common/Badge";

const mockChats = [
  { id: 1, name: "Team Chat", lastMsg: "Let’s meet at 6pm", unread: 2 },
  { id: 2, name: "John", lastMsg: "Sounds good!", unread: 0 },
  { id: 3, name: "Support", lastMsg: "Ticket resolved 🎉", unread: 1 },
];

export default function ChatList() {
  return (
    <div className="flex flex-col h-full overflow-y-auto p-4 space-y-3">
      {mockChats.map((chat) => (
        <motion.div
          key={chat.id}
          whileHover={{ scale: 1.02, backgroundColor: "rgba(59,130,246,0.1)" }}
          className="flex items-center gap-3 p-3 rounded-lg cursor-pointer border border-transparent hover:border-blue-600/20 transition"
        >
          <Avatar alt={chat.name} />
          <div className="flex-1">
            <p className="font-medium">{chat.name}</p>
            <p className="text-xs text-gray-400 truncate">{chat.lastMsg}</p>
          </div>
          {chat.unread > 0 && <Badge label={chat.unread} color="blue" />}
        </motion.div>
      ))}
    </div>
  );
}
