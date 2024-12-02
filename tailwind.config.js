module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-gradient-start': '#9F3F3F', // Custom gradient start color
        'custom-gradient-end': '#0A3253', 
        'custom-gray': '#F5F5F5',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #9F3F3F, #0A3253)', // Custom gradient
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
