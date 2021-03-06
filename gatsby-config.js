const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Memoria`,
    authors: [
      { name: "Tori", slug: "tori" },
      { name: "Neko", slug: "neko" },
      { name: "Inu", slug: "inu" }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Arimo:700", "Noto+Sans+JP:400,700"]
        }
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-postcss",
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        content: [
          path.join(process.cwd(), "src/**/!(*.d).{js,jsx,ts,tsx,md,mdx}")
        ],
        develop: false,
        tailwind: true,
        whitelist: ["emoji"]
      }
    }
  ]
}
