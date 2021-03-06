const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    container: {
      maxWidth: {
        sm: '540px',
      },
    },
    extend: {
      spacing: {
        135: '33.75rem',
      },
      fontFamily: {
        sans: ['Greycliff CF', ...defaultTheme.fontFamily.sans]
      },
      gridTemplateColumns: {
        '4-product': 'repeat(4, minmax(13rem, 1fr))',
        'product-listing': 'minmax(auto, 12.5rem) 1fr minmax(auto, 12.5rem)'
      }
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
