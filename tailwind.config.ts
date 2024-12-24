import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transformOrigin:{
        'center': 'center'
      },
      rotate: {
        'y-180': '180deg',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        custom: ["My Custom Font", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
