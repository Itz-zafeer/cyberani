const { gql } = require("@apollo/client");

export const globalSEOQuery = () => {
  const query = gql`
    query GlobalSets($site: String!) {
      globalSet(handle: "global_settings", site: $site) {
        ... on GlobalSet_GlobalSettings {
          site_name
          seo_title
          seo_description
          seo_keywords
          seo_image {
            src(width: 1200, height: 628)
          }
        }
      }
    }
  `;
  return query;
};
