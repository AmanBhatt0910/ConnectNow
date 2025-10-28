"use client";
import { motion } from "framer-motion";

export default function Loader({ size = 32 }) {
  return (
    <motion.div
      className="flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 1,
      }}
    >
      <div
        className="border-4 border-blue-600 border-t-transparent rounded-full"
        style={{ width: size, height: size }}
      />
    </motion.div>
  );
}
