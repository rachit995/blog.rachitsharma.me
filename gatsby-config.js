module.exports = {
  siteMetadata: {
    title: `Rachit Sharma's Blog`,
    name: `Rachit Sharma`,
    siteUrl: `https://blog.rachitsharma.me`,
    description: `A computer science engineer who likes photography ~ the usual`,
    hero: {
      heading: `A computer science engineer who likes photography ~ the usual.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/rachit995`,
      },
      {
        name: `github`,
        url: `https://github.com/rachit995`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/rachit995`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/rachit995`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rachit Sharma`,
        short_name: `Rachit Sharma`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `blograchitsharma`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-176044733-1",
      },
    },
  ],
};
