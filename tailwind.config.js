/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "heading1-bold": [
        "36px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "heading2-bold": [
        "30px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading3-bold": [
        "24px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading4-bold": [
        "20px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "body-bold": [
        "18px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "body-medium": [
        "18px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "base-bold": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "base-medium": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "base-light": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "small-bold": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "small-medium": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "subtle-medium": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "500",
        },
      ],
      "tiny-medium": [
        "10px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "x-small-bold": [
        "7px",
        {
          lineHeight: "9.318px",
          fonteWeight: "600",
        },
      ],
    },
    extend: {
      colors: {
        'bg-main': '#F9FAFB',           // soft background
        'bg-surface': '#FFFFFF',        // cards, containers
        'bg-muted': '#F2F4F7',          // input fields, hover
        'text-main': '#1E293B',         // main text
        'text-sub': '#64748B',          // secondary text
        'accent': '#2563EB',            // rich blue accent
        'accent-hover': '#1D4ED8',      // darker hover accent
        'accent-gradient-from': '#2563EB',
        'accent-gradient-to': '#06B6D4',
        'success': '#10B981',
        'error': '#EF4444',
        'border': '#E2E8F0',            // light border
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0,0,0,0.06)',
        card: '0 8px 24px rgba(0,0,0,0.08)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
