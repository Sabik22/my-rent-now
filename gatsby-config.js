module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    require("dotenv").config({
      path: `.env.${process.env.NODE_ENV}`,
    }),
  {
    resolve: `gatsby-source-graphql`,
    options: {
      typeName: `GitHub`,
      fieldName: `github`,
      url: `https://api.github.com/graphql`,
      headers: {
        Authorization: `Bearer your-github-token`,
            },
          },
        },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `starter-template-with-react-bootstrap`,
        short_name: `starter-with-react-bootstrap`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
