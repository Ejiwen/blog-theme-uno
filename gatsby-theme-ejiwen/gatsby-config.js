// In your gatsby-config.js
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
    plugins: [
      `gatsby-plugin-theme-ui`,`gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
      
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: 'data'
          }
        },
      
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `6237eox9dm6z`,
          accessToken: process.env.ACCESS_TOKEN,
        },
      },
    ],
  }