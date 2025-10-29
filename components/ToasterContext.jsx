// components/ToasterContext.jsx
"use client";

import { Toaster } from "react-hot-toast";

const ToasterContext = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        // Global options
        className: "shadow-md rounded-xl text-sm",
        style: {
          background: "white",
          color: "#0F172A",
          border: "1px solid rgba(14, 165, 233, 0.08)",
        },
      }}
    />
  );
};

export default ToasterContext;