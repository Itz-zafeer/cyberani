const { gql } = require("@apollo/client");

export const homeQuery = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "pages") {
        ...CommonFields
        ... on Entry_Pages_Home {
          title
          blueprint
          hero_hero_video {
            permalink
            extension
          }
          hero_hero_mobile_video {
            extension
            permalink
          }
          hero_banner_title
          hero_banner_description
          hero_fallback_image {
            extension
            src(width: 1920, height: 1080)
            ... on Asset_Assets {
              alt
            }
          }
          hero_fallback_mobile_image {
            extension
            src(width: 380, height: 800)
            ... on Asset_Assets {
              alt
            }
          }
          hero_hero_links {
            ... on Set_HeroHeroLinks_NewSet {
              hero_link_text
              hero_link
              hero_external_link
            }
          }
          about_title_heading
          about_description
          about_link_text
          about_link
          about_external_link
          about_features {
            ... on Set_AboutFeatures_Feature {
              about_icon {
                extension
                permalink
              }
              short_description
            }
          }
          about_image {
            extension
            src(width: 2500, height: 1741)
            ... on Asset_Assets {
              alt
            }
          }
          ba_bachelors_title_heading
          ba_bachelors_description
          ba_bachelors_link_text
          ba_bachelors_link
          ba_bachelors_external_link
          bachelor_programs_list {
            ... on Entry_Department_Department {
              title
              slug
              thumb_image: hero_fallback_image {
                extension
                src(width: 568, height: 677)
                ... on Asset_Assets {
                  alt
                }
              }
            }
          }
          ba_masters_title_heading
          ba_masters_description
          ba_masters_link_text
          ba_masters_link
          ba_masters_external_link
          ba_masters_image {
            extension
            src(width: 933, height: 819)
            ... on Asset_Assets {
              alt
            }
          }
          ba_master_features {
            ... on Set_BaMasterFeatures_Feature {
              icon {
                extension
                permalink
              }
              ba_master_program_feature_short_description
              type
            }
          }
          collage_life_title_heading
          collage_life_description
          collage_life_link_text
          collage_life_link
          collage_life_external_link
          collage_life_images {
            extension
            src(width: null, height: null)
            ... on Asset_Assets {
              alt
            }
          }
          how_i_choose_heading
          how_i_choose_bg_video {
            extension
            permalink
          }
          how_i_choose_bg_image {
            extension
            src(width: 1758, height: 1043)
            ... on Asset_Assets {
              alt
            }
          }
          how_i_choose_youtube_video
          how_i_choose_youtube_video_button_text
          news_events_title_heading
          news_events_description
          news_events_link_text
          news_events_link
          news_events_external_link
          custom_select
          news_events_list {
            title
            ...NewsQuery
          }
          title_heading
          explore_more_links {
            ... on Set_ExploreMoreLinks_NewSet {
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
          seo_image {
            extension
            src(width: 1200, height: 628)
          }
          seo_title
          seo_description
          seo_keywords
        }
      }
      news: entries(collection: "news", limit: 6, site: $site) {
        data {
          ...NewsQuery
        }
      }
    }

    fragment CommonFields on EntryInterface {
      published
      blueprint
      locale
      title
    }

    fragment NewsQuery on Entry_News_News {
      __typename
      title
      seo_title
      seo_keywords
      seo_description
      seo_image {
        extension
        src(width: 200, height: 200)
      }
      slug
      date(format: "d M Y")
      ... on Entry_News_News {
        is_event
        news_category {
          title
          slug
        }
        thumb_image {
          extension
          src(width: 566, height: 568)
          ... on Asset_Assets {
            alt
          }
        }
        start_date(format: "d M Y")
        end_date(format: "d M Y")
        organizer
        location
        locale
      }
    }
  `;
  return query;
};
