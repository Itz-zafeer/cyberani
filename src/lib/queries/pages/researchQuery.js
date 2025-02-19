const { gql } = require("@apollo/client");

export const researchQuery = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "pages") {
        ...CommonFields
        ... on Entry_Pages_Research {
          title
          seo_image {
            extension
            src(width: 1200, height: 628)
          }
          seo_title
          seo_description
          seo_keywords
          blueprint
          hero_hero_title
          hero_description
          hero_fallback_mobile_image {
            extension
            src(width: 430, height: 932)
            ... on Asset_Assets {
              alt
            }
          }
          hero_fallback_image {
            extension
            src(width: 1920, height: 1080)
            ... on Asset_Assets {
              alt
            }
          }
          research_section_headin
          explore_more_title_heading
          explore_more_explore_more_links {
            ... on Set_ExploreMoreExploreMoreLinks_NewSet {
              image {
                extension
                src(width: 567, height: 506)
                ... on Asset_Assets {
                  alt
                }
              }
              link_text
              link
              external_link
            }
          }
        }
      }
      research: entries(collection: "research", site: $site, page: 1) {
        data {
          ... on Entry_Research_Research {
            title
            researcher
            research_published_date(format: "M d, Y")
            research_description
            research_link
            research_category {
              title
              slug
            }
          }
          slug
          title
        }
      }
    }

    fragment CommonFields on EntryInterface {
      published
      blueprint
      locale

      slug
    }
  `;
  return query;
};
