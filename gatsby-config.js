module.exports = {
  siteMetadata: {
    title: `Gatsby Silverstripe CMS Starter`,
    description: `Build the frontend for your Silverstripe site in Gatsby.`,
    author: `@_unclecheese_`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-silverstripe`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#005b94`,
        theme_color: `#005b94`,
        display: `minimal-ui`,
        icon: `src/images/ss-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
    	resolve: `gatsby-source-silverstripe`,
    	options: {
    		host: ``
    	}
    },
    {
    	resolve: `gatsby-plugin-typescript`
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
