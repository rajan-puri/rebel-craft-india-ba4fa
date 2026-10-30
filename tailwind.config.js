/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "on-primary-fixed": "#001a42", background: "#f8f9ff", error: "#ba1a1a",
        "secondary-fixed-dim": "#a4c9ff", secondary: "#0060ac", "on-tertiary-fixed-variant": "#723600",
        "on-primary": "#ffffff", "inverse-primary": "#adc6ff", "secondary-fixed": "#d4e3ff",
        "on-error": "#ffffff", "on-surface-variant": "#424754", "on-surface": "#121c2a",
        tertiary: "#924700", "surface-container-highest": "#d9e3f6", "primary-fixed-dim": "#adc6ff",
        outline: "#727785", "secondary-container": "#64a8fe", "surface-container-low": "#eff4ff",
        "outline-variant": "#c2c6d6", "on-primary-fixed-variant": "#004395", "surface-container-high": "#dee9fc",
        "on-secondary-fixed": "#001c39", "on-error-container": "#93000a", "on-secondary-fixed-variant": "#004883",
        "on-primary-container": "#fefcff", "tertiary-fixed-dim": "#ffb786", "tertiary-container": "#b75b00",
        "primary-fixed": "#d8e2ff", "surface-bright": "#f8f9ff", "error-container": "#ffdad6",
        "primary-container": "#2170e4", "on-tertiary-fixed": "#311400", "surface-dim": "#d0dbed",
        "on-background": "#121c2a", "inverse-surface": "#27313f", "inverse-on-surface": "#eaf1ff",
        primary: "#0058be", "on-secondary-container": "#003c70", "surface-container": "#e6eeff",
        surface: "#f8f9ff", "surface-tint": "#005ac2", "surface-variant": "#d9e3f6",
        "surface-container-lowest": "#ffffff", "on-tertiary-container": "#fffbff", "on-tertiary": "#ffffff", "on-secondary": "#ffffff"
      },
      borderRadius: { DEFAULT: ".25rem", lg: ".5rem", xl: ".75rem", full: "9999px" },
      spacing: {
        gutter: "1.5rem", margin: "2.5rem", "margin-mobile": "1rem", "space-lg": "2rem",
        "space-sm": ".75rem", "space-xl": "3.5rem", "gutter-mobile": "1rem", "space-xs": ".5rem", "space-md": "1.25rem"
      },
      fontFamily: {
        "headline-md": ["Bagel Fat One"], "headline-sm": ["Bagel Fat One"], "badge-md": ["Londrina Solid"],
        display: ["Bagel Fat One"], "spec-code": ["Space Grotesk", "sans-serif"], "headline-lg-mobile": ["Bagel Fat One"],
        "spec-sm": ["Space Grotesk", "sans-serif"], "body-md": ["Space Grotesk"], "headline-lg": ["Bagel Fat One"],
        "body-lg": ["Space Grotesk"], "badge-display": ["Londrina Solid"], "display-mobile": ["Bagel Fat One"]
      },
      fontSize: {
        "headline-md": ["28px", { lineHeight: "36px", fontWeight: "400" }],
        "headline-sm": ["22px", { lineHeight: "30px", fontWeight: "400" }],
        "badge-md": ["22px", { lineHeight: "24px", letterSpacing: ".03em", fontWeight: "400" }],
        display: ["56px", { lineHeight: "64px", fontWeight: "400" }],
        "spec-code": ["14px", { lineHeight: "20px", letterSpacing: ".05em", fontWeight: "700" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "400" }],
        "spec-sm": ["12px", { lineHeight: "16px", letterSpacing: ".03em", fontWeight: "400" }],
        "body-md": ["17px", { lineHeight: "26px", fontWeight: "400" }],
        "headline-lg": ["40px", { lineHeight: "48px", fontWeight: "400" }],
        "body-lg": ["19px", { lineHeight: "28px", fontWeight: "500" }],
        "badge-display": ["32px", { lineHeight: "32px", letterSpacing: ".02em", fontWeight: "400" }],
        "display-mobile": ["36px", { lineHeight: "44px", fontWeight: "400" }]
      }
    }
  },
  plugins: [],
}
