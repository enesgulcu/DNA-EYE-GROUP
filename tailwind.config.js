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
        'daire1-bg': "url(/assets/images/daire1.png)",
        'daire2-bg': "url('/assets/images/daire2.png')",
        'daire3-bg': "url('/assets/images/daire3.jpeg')",
        'otherFea1': "url('/assets/images/otherfeatured1.jpeg')",
        'otherFea2': "url('/assets/images/otherFeatured2.jpeg')",
        'otherFea3': "url('/assets/images/otherfeatured3.jpeg')",
        'otherFea4': "url('/assets/images/otherfeatured4.png')",
        
        'footer-bg': "url('/assets/images/footerImage.png')",
        'footer-bg-mobile':"url('/assets/images/footerImageMobile.png')",

        'about-bg':"url('/assets/images/ContactImage.jpeg')",
        'about1-bg':"url('/assets/images/about2.webp')"
      },
      
    },
    colors:{
      grayHead:"#606060",
      grayIcon:"#ffffff",
      bodybg:"#f5f5f5",
      redTitle:"#9b0002",
      blackBg:"#030712",
      darkRed:"#7f2929",
      starYellow:"#ebb84e",
      commentTimeText:"#c3cfd9",
      commetTxt:"#989898",
      grayBg:"#eceef0",
      linkedinLogo:"#0E76A8",
      facebookLogo:"#F1FAFF30",
      cardBg:"#919EAB29",
      blueEye:"#458bcb"
    }
  },
  plugins: [
    require('flowbite/plugin')
]
};
