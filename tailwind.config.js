/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      typeFont: ['"Space Mono"'],
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px	",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "8rem",
        "2xl": "0rem",
      },
    },
    extend: {
      colors: {
        darkBlue: "#071222",
        primaryBG: "#F3F3F7",
        LightBG: {
          DEFAULT: "#E3E3EE",
          100: "#fafbff",
          200: "#E9EAF3",
        },
        DarkBg: "#272848",
        primaryColor: "#3B45FF",
        accentColor: {
          DEFAULT: "#C2C5FF",
          100: "#E6E7FB",
          200: "#9EDEFF",
          300: "#F9E0DC",
          400: "#DDD4F8",
          500: "#BDECF4",
        },
        BorderColor: "#3B45FF",
        borderColorOnDarkBG: "#303156",
      },
      keyframes: {
        lights: {
          "0%": {
            color: "hsl(230, 40%, 80%)",
            textShadow:
              "0 0 1em hsla(320, 100%, 50%, 0.2), 0 0 0.125em hsla(320, 100%, 60%, 0.3), -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),1em 0.125em 0.5em hsla(200, 100%, 60%, 0)",
          },

          "30%": {
            color: " hsl(230, 80%, 90%)",
            textShadow:
              "0 0 1em hsla(320, 100%, 50%, 0.5),0 0 0.125em hsla(320, 100%, 60%, 0.5),-0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4)",
          },

          "40%": {
            color: "hsl(230, 100%, 95%)",
            textShadow: ` 0 0 1em hsla(320, 100%, 50%, 0.5),
0 0 0.125em hsla(320, 100%, 90%, 0.5),
-0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);`,
          },

          "70%": {
            color: `hsl(230, 80%, 90%)`,
            textShadow: `0 0 1em hsla(320, 100%, 50%, 0.5),
              0 0 0.125em hsla(320, 100%, 60%, 0.5),
              0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
              -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4)`,
          },

          "100%": {
            color: `hsl(230, 40%, 80%)`,
            textShadow: `0 0 1em hsla(320, 100%, 50%, 0.2),
              0 0 0.125em hsla(320, 100%, 60%, 0.3),
              1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
              -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);`,
          },
        },
      },
      animation: {
        lightText: "lights 5s 750ms linear infinite",
      },
    },
  },
  plugins: [],
};
