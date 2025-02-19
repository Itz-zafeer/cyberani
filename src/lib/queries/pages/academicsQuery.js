const { gql } = require("@apollo/client");

export const academicsQuery = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "pages") {
        ...CommonFields
        ... on Entry_Pages_Academics {
          seo_image {
            extension
            src(width: 1200, height: 628)
          }
          seo_title
          seo_description
          seo_keywords
          title
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
      programs: entries(collection: "program", site: $site) {
        data {
          title
          slug
          ... on Entry_Program_Program {
            thumb_image: hero_fallback_image {
              extension
              src(width: 568, height: 677)
              ... on Asset_Assets {
                alt
              }
            }
            program_type {
              ... on Term_ProgramCategories_ProgramCategory {
                title
                slug
              }
            }
            department_category {
              ... on Term_DepartmentCategory_DepartmentCategory {
                title
                slug
              }
            }
          }
        }
      }
      department_categories: terms(
        taxonomy: "department_category"
        filter: { site: $site }
      ) {
        data {
          ... on Term_DepartmentCategory_DepartmentCategory {
            title
            slug
            show_on_academics
            ... on Term_DepartmentCategory_DepartmentCategory {
              program_category {
                slug
                title
              }
            }
          }
        }
      }
      program_categories: terms(
        taxonomy: "program_categories"
        filter: { site: $site }
      ) {
        data {
          ... on Term_ProgramCategories_ProgramCategory {
            title
            slug
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
