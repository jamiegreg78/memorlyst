/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        sm: '0.5rem',
        md: '1rem'
      },
      colors: {
        brand: '#ac3ae0',
        background: {
          light: '#fff',
          dark: '#333333'
        }
      },
      borderRadius: {
        sm: '8px',
        md: '16px'
      },
      borderColor: {
        outline: '#fafafa',
        primary: '#d1d1d1'
      }
    },
  },
  plugins: [],
}

