/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'karla' : ['Karla', 'sans-serif'],
        'fira' : ['Fira Mono', 'space'],
        'roboto': ['Roboto Mono', 'monospace'],
        'noto': ['Noto Sans Mono', 'monospace'],
        'ibm': ['IBM Plex Mono', 'monospace']
      }
    },
    colors: {
      'dark-navy': '#020c1b',
      'navy': '#0a192f',
      'light-navy': '#112240',
      'lightest-navy': '#233554',
      'dark-slate': '#495670',
      'slate': '#8892b0',
      'light-slate': '#a8b2d1',
      'lightest-slate': '#ccd6f6',
      'white' : '#e6f1ff',
      'green': '#47b8a5',
      'pink' : '#f57dff',
      'blue': '#57cbff'
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },
  plugins: [],
}
