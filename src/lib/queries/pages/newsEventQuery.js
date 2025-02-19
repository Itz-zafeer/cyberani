const { gql } = require("@apollo/client");

export const newsEventQuery = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "pages") {
        published
        blueprint
        locale
        title
        ... on Entry_Pages_NewsEvents {
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
          hero_fallback_mobile_image {
            extension
            src(width: 430, height: 932)
            ... on Asset_Assets {
              alt
            }
          }
          hero_fallback_image {
            extension
            ... on Asset_Assets {
              alt
            }
            src(width: 1920, height: 1080)
          }
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
      news: entries(
        collection: "news"
        limit: 6
        site: $site
        page: 1
        sort: ["date desc"]
      ) {
        data {
          ... on Entry_News_News {
            title
            is_event
            news_category {
              title
              slug
            }
            thumb_image {
              src(width: 566, height: 568)
              extension
            }
            date: publish_date(format: "M d, Y")
            start_date(format: "M d, Y")
            end_date(format: "M d, Y")
            location
            organizer
          }
          slug
          title
        }
        total
        per_page
        current_page
        from
        to
        last_page
        has_more_pages
      }
      terms(taxonomy: "news_category", filter: { site: $site }) {
        data {
          title
          slug
        }
      }
    }
  `;
  return query;
};
