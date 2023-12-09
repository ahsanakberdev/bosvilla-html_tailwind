/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Lato': ['Lato'],
      'Noto-Serif': ['Noto Serif Display'],
      'Rennie-Bennie': ['Reenie Beanie'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '0rem',
      },
    },
    extend: {
      dropShadow: {
        'customShadow': '0px 0px 30px #00000041',
        'customShadow2': ' 0px 0px 30px #00000029',
        'customShadow3': '0 3px 10px rgb(0 0 0 / 0.2)',
      },
      borderRadius: {
        'largee': '30px',
      },
      fontSize: {
        'largeFont': '40px',
      },
      lineHeight: {
        'extra-line': '80px',
      },
      colors: {
        'brown' : "#472D16",
        'light' : '#899C88',
        'light2' : '#707070',
        'light3' : '#F8F8F8',
        'grey' : '#919191',
        'secondary' : '#CEB384',
      },
      backgroundImage: {
        'banner': "url('../src/img/banner.png')",
        'experience': "url('../src/img/experience.png')",
        'insideBanner': "url('../src/img/inside-banner.png')",
      }
    },
  },
  plugins: [],
}

