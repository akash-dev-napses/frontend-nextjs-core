module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,jsx,ts,tsx}",
    "./atoms/*.js",
    "./atoms/**/*.js",
    "./atoms/**/**/*.js",
    "./molecules/*.js",
    "./molecules/**/*.js",
    "./molecules/**/**/*.js",
    "./organisms/*.js",
    "./organisms/**/*.js",
    "./organisms/**/**/*.js",
    "./stories/*.js",
    "./stories/**/*.js",
    "./pages/**/*.{html,js}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./templates/*.js",
    "./templates/**/*.js",
    "./templates/**/**/*.js",
    "./components/**/*.{html,js}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  options: {},
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#D3CDF0",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },

        secondary: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },

        neutral: {
          50: "#F9F9FB",
          100: "#F3F3F6",
          200: "#E5E5EB",
          300: "#D1D1DB",
          400: "#9C9CAF",
          500: "#6B6B80",
          600: "#4B4B63",
          700: "#373751",
          800: "#1F1F37",
          900: "#14142B",
        },

        info: {
          50: "#E5F5FC",
          100: "#017AAD",
          200: "#207DE1",
        },

        success: {
          50: "#EAF3EB",
          100: "#29823B",
        },

        warning: {
          50: "#FDF4E5",
          100: "#E99400",
        },

        error: {
          50: "#FCEAEA",
          100: "#DC2020",
        },

        white: "#FCFCFC",
        black: "#0C0C1E",
      },

      // backgroundImage: {
      //   rangeThumb: "url('public/images/icons/range-thumb.svg')",
      //   checkMarkWhite: "url('public/images/icons/check-white.svg')",
      //   checkMarkGray: "url('public/images/icons/check-gray.svg')",
      //   sort: "url('public/images/icons/sort-icon.svg')",
      //   ascSort: "url('public/images/icons/sort-icon.svg')",
      //   dscSort: "url('public/images/icons/sort-icon.svg')",
      // },

      margin: {
        10: "10%",
        100: "100%",
      },

      spacing: {
        128: "32rem",
        411: "103rem",
        572: "35.75rem",
      },

      top: {
        10: "10%",
        100: "100%",
      },

      boxShadow: {
        rangeThumb: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        card: "0px 9px 18px rgba(0, 0, 0, 0.15)",
        nav: "inset 0px -1px 0px #EAEAEA",
        accordion: "0px -1px 0px 0px rgba(206, 212, 218, 1) inset",
      },
      dropShadow: {
        xs: "0px 2px 2px rgba(0, 0, 0, 0.06)",
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};
