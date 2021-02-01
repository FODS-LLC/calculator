module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      screens: {
        xxl: '1600px',
        print: { raw: 'print' },
      },
      borderRadius: {
        21: '21px',
        2: '2px',
      },
      colors: {
        'energy-yellow': '#f8d146',
        charade: '#161617',
        'dove-gray': '#575757',
        'mid-gray': '#4e4e56',
        'fods-white': '#fff',
        'mine-shaft': '#444',
        alabaster: '#f8fff8',
        'input-gray': '#FAFAFA',
        'input-text-gray': '#898989',
        'modal-background': 'rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        'beba-neue-regular': ['BebasNeue-Regular', 'sans-serif'],
        'bebas-neue-bold': ['BebasNeue-Bold', 'sans-serif'],
        'nexa-bold': ['Nexa-Bold', 'sans-serif'],
        'nexa-lite': ['Nexa-Lite', 'sans-serif'],
        'helvetica-neue': ['Helvetica-Neue' ,'sans-serif'],
      },
      fontSize: {
        160: '160px',
        96: '96px',
        64: '64px',
        22: '22px',
        30: '30px',
        40: '40px',
        115: '115px',
        52: '52px',
        '15px': '15px',
      },
      gridTemplateRows: {
        layout: 'minmax(0, 1fr) 360px;',
      },
      gridTemplateColumns: {
        header: 'minmax(138px,200px) 1fr minmax(0px,200px);',
      },
      height: {
        'main-content': '554px',
        'page-section': '360px',
        160: '160px',
        85: '85px',
        60: '60px',
        65: '65px',
        24: '24px',
      },
      lineHeight: {
        160: '160px',
        30: '30px',
        115: '115px',
        0: "0",
        1: "1"
      },
      minHeight: {
        'main-content': '554px',
        '26px': '26px',
      },
      minWidth: {
        380: '380px',
        '600px': '600px',
      },
      maxWidth: {
        '90%': '90%',
        380: '380px',
        '600px': '600px',
      },
      spacing: {
        68: '17em',
        22: '5.5rem',
      },
      width: {
        'main-xl': '90%',
        'main-lg': '1000px',
        'main-md': '750px',
        'main-sm': '300px',
        '50%': '50%',
        360: '360px',
        330: '330px',
        284: '284px',
        logo: '127px',
        '24px': '24px',
      },
      inset: {
        '21.6': '5.4rem',
      },
      paddingTop: {
        '20px': '20px',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
  },
  plugins: [require('@tailwindcss/custom-forms'), require('@tailwindcss/ui')],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
