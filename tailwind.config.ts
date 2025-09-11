import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF4500",  // オレンジレッド
          dark: "#DC2626",     // 濃い赤
          light: "#FFF5F0",    // 薄いピーチ
        },
        accent: {
          DEFAULT: "#FF6B35",  // コーラル
          dark: "#FF4500",
          light: "#FFE4DB",
        },
        sun: {
          DEFAULT: "#FF4500",  // 互換性のため残す
          dark: "#DC2626",
          light: "#FFF5F0",
        },
      },
      fontFamily: {
        'sans': ['"Noto Sans JP"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        'display': ['"Zen Kaku Gothic New"', '"Noto Sans JP"', 'sans-serif'],
      },
      animation: {
        "slide-up": "slideUp 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
        "slide-down": "slideDown 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
        "fade-in": "fadeIn 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;