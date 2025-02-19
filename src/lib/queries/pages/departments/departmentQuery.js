const { gql } = require("@apollo/client");

export const departmentQuery = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, collection: "department", site: $site) {
        title

        slug
        id
        locale
        last_modified
        blueprint
        ... on Entry_Department_Department {
          seo_image {
            extension
            src(width: 1200, height: 628)
          }
          seo_title
          seo_description
          seo_keywords
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
            src(width: 1920, height: 1080)
            extension
            ... on Asset_Assets {
              alt
            }
          }
          parent_page {
            ... on Entry_Department_Department {
              title
              slug
              __typename
            }
          }
          program_category {
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
          about_department_heading
          about_department_description
          program_heading
          connected_programs {
            title
            slug
            __typename
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
            ... on Entry_Department_Department {
              thumb_image: hero_fallback_image {
                extension
                src(width: 568, height: 677)
                ... on Asset_Assets {
                  alt
                }
              }
              program_type: program_category {
                title
                slug
              }
              department_category {
                title
                slug
              }
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
    }
  `;
  return query;
};
