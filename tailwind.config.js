/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'light',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald',],
      'typeFont': ['"Space Mono"',],

    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px	',
      }, padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '0rem',
        '2xl': '0rem',
      },
    },
    extend: {
      colors: {
        primaryBG: "#F3F3F7",
        LightBG: {
          DEFAULT: '#E3E3EE',
          100: '#fafbff',
          200: '#E9EAF3',
        },
        DarkBg: "#272848",
        primaryColor: "#3B45FF",
        accentColor: {
          DEFAULT: '#C2C5FF',
          100: '#E6E7FB',
          200: '#9EDEFF',
          300: '#F9E0DC',
          400: '#DDD4F8',
          500: '#BDECF4',

        },
        BorderColor: "#3B45FF",
        borderColorOnDarkBG: "#303156",
      },
    },
  },
  plugins: [],
}; 
