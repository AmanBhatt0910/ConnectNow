"use client";
import { useState } from "react";
import { Menu, X, MessageCircle, Users, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "General", icon: MessageCircle },
    { name: "Team", icon: Users },
    { name: "Settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 bg-blue-600 p-2 rounded-lg z-50"
      >
        <Menu className="w-5 h-5 text-white" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed inset-y-0 left-0 w-64 bg-[#151820] border-r border-gray-800 z-40 md:static md:translate-x-0"
          >
            <div className="flex justify-between items-center p-4 md:hidden">
              <h2 className="text-lg font-semibold text-blue-500">Chats</h2>
              <button onClick={() => setOpen(false)}>
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <ul className="p-4 space-y-2 text-gray-300">
              {menuItems.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.03, x: 4 }}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-blue-600/10 rounded-lg cursor-pointer"
                >
                  <item.icon className="w-4 h-4 text-blue-400" />
                  {item.name}
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
