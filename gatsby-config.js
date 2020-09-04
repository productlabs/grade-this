const urljoin = require("url-join");
const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "http://www.scorethisdomain.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-chakra-ui",
    "gatsby-plugin-lodash",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`
          },
          {
            resolve: "gatsby-remark-images",
          },
          {
            resolve: "gatsby-remark-responsive-iframe"
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs"
        ]
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
  ]
};
