// tailwind.config.js
module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        outline: {
          black: ['2px solid #000000', '1px'],
          borderRadius: {
            'none': '0',
            'sm': '0.125rem',
            DEFAULT: '0.25rem',
            DEFAULT: '4px',
            'md': '0.375rem',
            'lg': '0.5rem',
            'full': '9999px',
            'large': '12px',
          },
        },
        colors: {
          amazon_blue: {
            light: "#232F3E",
            DEFAULT: "#131921",
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require("@tailwindcss/line-clamp")],
};