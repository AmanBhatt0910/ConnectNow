"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Avatar({ src, alt = "User", size = 40 }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative inline-flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold overflow-hidden"
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-cover"
          style={{ width: "100%", height: "100%" }}
          priority={false}
        />
      ) : (
        <span className="text-sm">{alt.charAt(0).toUpperCase()}</span>
      )}
      <span className="absolute bottom-0 right-0 block w-2 h-2 bg-green-500 rounded-full border-2 border-[#0f1117]" />
    </motion.div>
  );
}
