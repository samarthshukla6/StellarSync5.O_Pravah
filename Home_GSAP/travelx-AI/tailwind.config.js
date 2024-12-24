/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-hero-gradient-box': "url('https://cdn.prod.website-files.com/6696811…/6696811…_Black-Gradient-Mask1x.png'), linear-gradient(225deg, #fb47ff00,  var(--gradient-4) 42%, #5babf9 53%, var(--gradient-2)), linear-gradient(to bottom, var(--1-main-colors--primary), var(--1-main-colors--primary))",
      },
      colors: {
        coral: '#ff6f61',
        searchColor: '#f1f4f6',
        searchBoxInputcolor: '#3e3e3e',
        flashColour: '#212121',
        lightblue: '#f1f1f1',
        newcolor: '#333',
        newcolor2: '#666',
        bordercolor: "#f5f5f5",
        boldcolor: '#4a4a4a',
        boldsmall: '#686363',
        smallest: "#616161",
      },
      fontSize: {
        'texsize1': "12px",
        'textsize2': "12px",


      },
      scrollBehavior:{
        smooth:'smooth',
      },

    },
  },
  plugins: [],
}

