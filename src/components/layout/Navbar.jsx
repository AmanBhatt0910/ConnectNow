"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, LogIn, UserPlus, Home } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#151820] backdrop-blur-sm"
    >
      <Link href="/" className="flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-blue-500" />
        <h1 className="text-2xl font-bold text-blue-500 tracking-tight">
          ConnectNow
        </h1>
      </Link>

      <div className="flex items-center gap-4 text-sm">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-blue-400 transition-colors"
        >
          <Home className="w-4 h-4" /> Home
        </Link>
        <Link
          href="/(auth)/login"
          className="flex items-center gap-1 hover:text-blue-400 transition-colors"
        >
          <LogIn className="w-4 h-4" /> Login
        </Link>
        <Link
          href="/(auth)/signup"
          className="flex items-center gap-1 hover:text-blue-400 transition-colors"
        >
          <UserPlus className="w-4 h-4" /> Signup
        </Link>
      </div>
    </motion.nav>
  );
}
