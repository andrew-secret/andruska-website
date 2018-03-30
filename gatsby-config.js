module.exports = {
  siteMetadata: {
    title: `Andruska – pixel und papiert`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
  pathPrefix: `/andruska-website`,
};
