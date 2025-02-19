const { gql } = require("@apollo/client");

export const collegeQuery = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "pages") {
        ...CommonFields
        ... on Entry_Pages_CollegeLife {
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
          hero_fallback_image {
            extension
            src(width: 1920, height: 1080)
            ... on Asset_Assets {
              alt
            }
          }
          hero_video {
            permalink
          }
          play_button_label
          hero_youtube_video_url
          campus_heading
          campus_description
          facilities_slides {
            ... on Set_FacilitiesSlides_Slides {
              slide_heading
              slide_description
              slide_image {
                extension
                src(width: 1758, height: 855)
                ... on Asset_Assets {
                  alt
                }
              }
            }
          }
          student_offer_heading
          student_affair_banner_description
          student_offer_items {
            ... on Set_StudentOfferItems_StudentOffers {
              slide_image {
                extension
                ... on Asset_Assets {
                  alt
                }
                src(width: 483, height: 683)
              }
              slide_heading
              slide_description
            }
          }
          academic_affairs_heading
          academic_affair_description
          academic_affairs_slides {
            ... on Set_AcademicAffairsSlides_NewSet {
              slide_heading: title_heading
              slide_description
              slide_image {
                extension
                src(width: 483, height: 683)
                ... on Asset_Assets {
                  alt
                }
              }
            }
          }
          explore_more_title_heading
          explore_more_explore_more_links {
            ... on Set_ExploreMoreExploreMoreLinks_NewSet {
              image {
                ... on Asset_Assets {
                  alt
                }
                src(width: 567, height: 506)
                extension
              }
              link_text
              link
              external_link
            }
          }
          events_title_heading
          events_description
          events_link_text
          events_link
          events_external_link
          events_top_title_heading
        }
      }
      entries(
        collection: "news"
        limit: 6
        site: $site
        page: 1
        filter: { news_category: "events" }
      ) {
        data {
          ... on Entry_News_News {
            title
            thumb_image {
              src(width: 200, height: 200)
              extension
            }
            publish_date(format: "M d, Y")
            start_date(format: "M d, Y")
            end_date(format: "M d, Y")
            slug
            title
            organizer
            locale
          }
        }
      }
    }

    fragment CommonFields on EntryInterface {
      published
      blueprint
      locale
      title
      slug
    }
  `;
  return query;
};
