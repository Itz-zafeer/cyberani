const { gql } = require("@apollo/client");

export const privacyQuery = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "pages") {
        published
        blueprint
        locale
        title
        ... on Entry_Pages_CommonPage {
          title
          blueprint
          seo_image {
            extension
            src(width: 1200, height: 628)
          }
          seo_title
          seo_description
          seo_keywords
          hero_hero_title
          hero_description
          hero_fallback_image {
            extension
            ... on Asset_Assets {
              alt
            }
            src(width: 200, height: 200)
          }
          description_with_html
        }
      }
    }
  `;
  return query;
};
