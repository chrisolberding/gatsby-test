require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulHost = "preview.contentful.com";
const contentfulAccessToken = 'Zrf-UhD8bNS0VC7WK9JDhvt2RbvOYr2Ofpvs7bbaQGE';

const contentfulConfig = {
  spaceId: 'vm4b5tamejzk',
  accessToken: 'Zrf-UhD8bNS0VC7WK9JDhvt2RbvOYr2Ofpvs7bbaQGE',
};

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
if (process.env.contentfulHost) {
  contentfulConfig.host = process.env.contentfulHost;
  contentfulConfig.accessToken = process.env.Zrf-UhD8bNS0VC7WK9JDhvt2RbvOYr2Ofpvs7bbaQGE;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: "Gatsby Contentful starter",
  },
  pathPrefix: "/gatsby-contentful-starter",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
  ],
};
