require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.GATSBY_SPACE_ID,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
      },
    },
  ],
  pathPrefix: `/andruska-website`,
};
