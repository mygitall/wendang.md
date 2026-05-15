/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{html,js,ts,jsx,tsx,vue}",
    ],
    darkMode: ['class', '[data-theme="light"]'],
    theme: {
      extend: {
        colors: {
          primary: "#3B82F6",
          darkBg: "#0F1117",
          card: "rgba(255, 255, 255, 0.05)",
          border: "rgba(255, 255, 255, 0.12)",
          text: {
            title: "#FFFFFF",
            base: "#D1D5DB",
            minor: "#9CA3AF",
          }
        },
        fontFamily: {
          sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "PingFang SC", "Helvetica Neue", "sans-serif"],
        },
        borderRadius: {
          card: "16px",
          button: "6px",
        },
        letterSpacing: {
          hero: '-2px',
          section: '-0.6px',
          card: '-0.3px',
          nav: '-0.1px',
          body: '-0.2px',
          eyebrow: '1.2px',
        },
        fontWeight: {
          light: 300,
          guide: 380,
          normal: 400,
          nav: 450,
          section: 500,
          news: 530,
          card: 550,
          semibold: 600,
          logo: 650,
        },
        transitionDuration: {
          theme: '400ms',
          card: '300ms',
          link: '200ms',
        },
        backdropBlur: {
          nav: '20px',
        },
      },
    },
    plugins: [],
  }
