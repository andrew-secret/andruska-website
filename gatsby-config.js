module.exports = {
  siteMetadata: {
    title: `Andruska – pixel und papiert`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        transpileOnly: true,
        compilerOptions: {
          target: `esnext`,
          experimentalDecorators: true,
          jsx: `react`,
        },
      },
    },
  ],
  pathPrefix: `/andruska-website`,
};
