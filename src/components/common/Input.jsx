"use client";
import { motion } from "framer-motion";

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  icon: Icon,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full flex flex-col space-y-2"
    >
      {label && <label className="text-sm text-gray-400">{label}</label>}

      <div className="relative flex items-center">
        {Icon && <Icon className="absolute left-3 w-4 h-4 text-gray-500" />}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-[#1a1d24] text-gray-200 rounded-lg px-3 py-2 pl-${
            Icon ? "9" : "3"
          } outline-none border border-gray-700 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.2)] transition ${className}`}
        />
      </div>
    </motion.div>
  );
}
