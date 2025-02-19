const { gql } = require("@apollo/client");

export const newsQueryGQL = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "news") {
        published
        blueprint
        locale
        title

        ... on Entry_News_News {
          seo_image {
            extension
            src(width: 1200, height: 628)
          }
          seo_title
          seo_description
          seo_keywords
          is_event
          news_category {
            title
            slug
          }
          thumb_image {
            extension
            src(width: 200, height: 200)
            ... on Asset_Assets {
              alt
            }
          }
          slider_images {
            extension
            src(width: 1758, height: 855)
            ... on Asset_Assets {
              alt
            }
          }
          description_with_html
          date: publish_date(format: "d M Y")
          start_date(format: "d M Y")
          end_date(format: "d M Y")
          organizer
          location
          show_more_news
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
        filter: { slug: { not: $slug } }
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

            publish_date(format: "M d, Y")
            start_date(format: "M d, Y")
            end_date(format: "M d, Y")
            location
            organizer
          }
          slug
          title
        }
      }
    }
  `;
  return query;
};
