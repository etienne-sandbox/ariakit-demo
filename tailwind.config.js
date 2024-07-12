import plugin from "tailwindcss/plugin";

const scrollbarHide = plugin(function ({ addUtilities }) {
  addUtilities(
    {
      ".scrollbar-hide": {
        /* IE and Edge */
        "-ms-overflow-style": "none",
        /* Firefox */
        "scrollbar-width": "none",
        /* Safari and Chrome */
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
      ".scrollbar-default": {
        /* IE and Edge */
        "-ms-overflow-style": "auto",
        /* Firefox */
        "scrollbar-width": "auto",
        /* Safari and Chrome */
        "&::-webkit-scrollbar": {
          display: "block",
        },
      },
    },
    ["responsive"],
  );
});

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    data: {
      highlighted: "highlighted",
      disabled: "disabled",
      active: "active",
      "focus-visible": "focus-visible",
      "active-item": "active-item",
    },
    extend: {
      colors: {
        background: "#1d1d1f",
        paper: "#343336",
        // dynamic colors
        "dynamic-50": "rgb(var(--color-dynamic-50) / <alpha-value>)",
        "dynamic-100": "rgb(var(--color-dynamic-100) / <alpha-value>)",
        "dynamic-200": "rgb(var(--color-dynamic-200) / <alpha-value>)",
        "dynamic-300": "rgb(var(--color-dynamic-300) / <alpha-value>)",
        "dynamic-400": "rgb(var(--color-dynamic-400) / <alpha-value>)",
        "dynamic-500": "rgb(var(--color-dynamic-500) / <alpha-value>)",
        "dynamic-600": "rgb(var(--color-dynamic-600) / <alpha-value>)",
        "dynamic-700": "rgb(var(--color-dynamic-700) / <alpha-value>)",
        "dynamic-800": "rgb(var(--color-dynamic-800) / <alpha-value>)",
        "dynamic-900": "rgb(var(--color-dynamic-900) / <alpha-value>)",
        "dynamic-950": "rgb(var(--color-dynamic-950) / <alpha-value>)",
      },
    },
  },
  plugins: [scrollbarHide],
};
