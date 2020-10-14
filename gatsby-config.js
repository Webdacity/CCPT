module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "CCPT | Cape Control Panel Technology",
        short_name: "Webdacity",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "standalone",
        icon: "src/assets/images/logos/ccpt/favicon.png",
        crossOrigin: `use-credentials`,
      },
    },
  ],
  siteMetadata: {
    title: "CCPT",
    author: "Webdacity"
  },
}
