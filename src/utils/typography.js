import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Helvetica Neue', 'Segoe UI', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Helvetica Neue', 'Segoe UI', 'Helvetica', 'sans-serif'],

  googleFonts: [
    {
      name: 'Material+Icons',
      styles: [
        '400',
      ],
    },
  ],
});

export default typography;