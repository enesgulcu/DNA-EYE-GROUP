/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/lib/**/*.js",

  ],

  theme: {
    extend: {
      fontFamily: {
        'libre-bodoni': ['Libre Bodoni', 'serif'],
        'lexend': ['Lexend', 'sans-serif']
      },
      backgroundImage: {
        'daire1-bg': "url(/assets/images/daire1.webp)",
        'daire2-bg': "url('/assets/images/daire2.webp')",
        'daire3-bg': "url('/assets/images/daire3.webp')",
        'otherFea1': "url('/assets/images/otherfeatured1.webp')",
        'otherFea2': "url('/assets/images/otherFeatured2.webp')",
        'otherFea3': "url('/assets/images/otherfeatured3.webp')",
        'otherFea4': "url('/assets/images/otherfeatured4.webp')",

        'footer-bg': "url('/assets/images/footerImage.webp')",
        'footer-bg-mobile': "url('/assets/images/footerImageMobile.webp')",

        'about-bg': "url('/assets/images/ContactImage.webp')",
        'about1-bg': "url('/assets/images/about2.webp')"
      },

    },
    colors: {
      grayHead: "#606060",
      grayIcon: "#ffffff",
      bodybg: "#f5f5f5",
      redTitle: "#9b0002",
      blackBg: "#030712",
      darkRed: "#7f2929",
      starYellow: "#ebb84e",
      commentTimeText: "#c3cfd9",
      commetTxt: "#989898",
      grayBg: "#eceef0",
      linkedinLogo: "#0E76A8",
      facebookLogo: "#F1FAFF30",
      cardBg: "#919EAB29",
      blueEye: "#458bcb"
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
};
