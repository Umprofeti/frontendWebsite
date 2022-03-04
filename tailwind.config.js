module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      screens: {
        'sm-xl': '375px',
        'laptopL': '1440px',
        '3xl': '1920px',
      },
      backgroundImage: {
        'ImgTag': "url(/src/img/portada.svg)",
      },
      keyframes:{
        pulseFixed:{
          '0%, 100%':{opacity: 1},
          '50%': {opacity: .5}
        }
      },
      animation:{
        pulseFixed: 'pulseFixed 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
    fontFamily:{
      'Volkhov': ['Volkhov', 'serif'],
      'Metropolis': ['MetropolisLight', 'serif'],
      'Lato': ['Lato', 'sans-serif'],
      'Karla': ['Karla', 'serif']
    }
  },
  plugins: [],
  variants:{}
}
