/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    // fontFamily : {
    //   body : ["PermanentMarker-Regular"]
    // },
    extend: {
      backgroundImage: {
        "header-img" : "url('../img/hero-section-min.jpg')",
        "section-fixe" : "url('../img/about-me-2-min-1024x683.jpg')",
        "guitar-lessons" : "url('../img/guitar-lessons.jpg')",
        "guitar-stay-in-tuch" : "url('../img/stay-in-touch.jpg')",
        "footer-profile" : "url('../img/photo_2024-11-09_00-15-04.jpg')",
      },

     },
  },
  plugins: [],
}

