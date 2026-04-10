/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f4fa",
          100: "#d9e4f0",
          200: "#b3c8e1",
          300: "#8cacd2",
          400: "#6690c3",
          500: "#3d5a8c", // Navy Blue base
          600: "#001f3f", // Navy Blue - main
          700: "#001a33",
          800: "#001427",
          900: "#000f1a",
        },
        secondary: {
          50: "#fffef5",
          100: "#fffde0",
          200: "#fffcc7",
          300: "#fffba3",
          400: "#fff97f",
          500: "#fff65a",
          600: "#FFD700", // Gold - main
          700: "#e6c200",
          800: "#ccad00",
          900: "#b39900",
        },
        accent: {
          50: "#f5eff8",
          100: "#e6d4f0",
          200: "#d9b3e6",
          300: "#cc99dd",
          400: "#bb66d4",
          500: "#7a3d8f",
          600: "#440055", // Deep Violet - main
          700: "#3a0047",
          800: "#300039",
          900: "#26002b",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.8s ease-in-out",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(255, 215, 0, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(255, 215, 0, 0.8)" },
        },
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #001f3f 0%, #440055 100%)",
        "gradient-gold": "linear-gradient(135deg, #FFD700 0%, #e6c200 100%)",
        "gradient-light":
          "linear-gradient(135deg, #fffdf2 0%, #fff7cc 42%, #ffeaa0 100%)",
        "gradient-sunlit":
          "radial-gradient(circle at top left, rgba(255, 248, 196, 0.95) 0%, rgba(255, 243, 176, 0.72) 22%, rgba(255, 255, 255, 0) 45%), linear-gradient(135deg, #fffef6 0%, #fff8d8 48%, #ffe79a 100%)",
      },
    },
  },
  plugins: [],
};
