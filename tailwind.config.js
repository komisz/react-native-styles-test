module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#ffffff'
        },
        grey: {
          light: '#BFBFBF',
          DEFAULT: '#808080',
          dark: '#404040'
        },
        black: {
          DEFAULT: '#000000'
        },
        blue: {
          light: '#B4CDE2',
          DEFAULT: '#7CA8CC',
          dark: '#4682B4'
        }
      },
      spacing: {
        nav: '4rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
