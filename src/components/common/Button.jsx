"use client";
import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  icon: Icon,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200";
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "border border-blue-600 text-blue-400 hover:bg-blue-600/10 disabled:opacity-50 disabled:cursor-not-allowed",
    danger:
      "bg-red-600 hover:bg-red-700 text-white disabled:opacity-50 disabled:cursor-not-allowed",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </motion.button>
  );
}
