const { gql } = require("@apollo/client");

export const helpSupportQuery = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "pages") {
        ...CommonFields
        ... on Entry_Pages_HelpSupport {
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
          faq_heading
          faq_description
          faq_tab {
            ... on Set_FaqTab_Items {
              id
              tab_title
              has_parent
              faq_items {
                ... on Set_FaqTab_FaqItems_NewSet {
                  question
                  answer_text
                }
              }
            }
          }
          contact_heading
          contact_details {
            ... on Set_ContactDetails_NewSet {
              icon {
                extension
                permalink
                ... on Asset_Assets {
                  alt
                }
              }
              details_text
              details_type {
                value
                label
              }
              location_link
            }
          }
          explore_more_title_heading
          explore_more_explore_more_links {
            ... on Set_ExploreMoreExploreMoreLinks_NewSet {
              image {
                extension
                src
              }
              link_text
              link
              external_link
            }
          }
          slug
        }
      }
      program_categories: terms(
        taxonomy: "program_categories"
        filter: { site: $site }
      ) {
        data {
          title
          slug
        }
      }
      department_categories: terms(
        taxonomy: "department_category"
        filter: { site: $site }
      ) {
        data {
          title
          slug
          ... on Term_DepartmentCategory_DepartmentCategory {
            show_on_academics
            program_category {
              slug
              title
            }
          }
        }
      }
      programs: entries(collection: "program", site: $site) {
        data {
          title
          slug
          ... on Entry_Program_Program {
            program_type {
              slug
            }
            department_category {
              slug
              title
            }
          }
        }
      }
      globalSet(handle: "global_settings", site: $site) {
        ... on GlobalSet_GlobalSettings {
          social_icons {
            ... on Set_SocialIcons_NewSet {
              social_icon {
                extension
                permalink
              }
              social_link
              social_link_text
              social_external_link
            }
          }
          phone_number
          email_address
          physical_add
          site_name
          seo_title
          seo_description
          seo_keywords
          seo_image {
            src(width: 200, height: 200)
          }
          alert_color
          alert_icon {
            extension
            permalink
          }
          alert_links {
            ... on Set_AlertLinks_NewSet {
              alert_link_text
              alert_link
              alert_external_link
            }
          }
          alert_text
          show_alert
        }
      }
    }

    fragment CommonFields on EntryInterface {
      published
      blueprint
      locale
    }
  `;
  return query;
};
