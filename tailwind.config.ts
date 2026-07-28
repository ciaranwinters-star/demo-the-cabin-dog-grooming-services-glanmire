import type { Config } from "tailwindcss"
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: {
      brand: { DEFAULT: "#134D0A", dark: "#103F08", light: "#477440" },
      accent: { DEFAULT: "#7FAF7A", dark: "#689064", light: "#9BC197" },
      canvas: "#FFFFFF",
    },
    fontFamily: {
      display: ["var(--font-display)", "Georgia", "serif"],
      sans: ["var(--font-body)", "system-ui", "sans-serif"],
    },
  } },
  plugins: [],
}
export default config
