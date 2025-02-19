const { gql } = require("@apollo/client");

export const topNavQuery = () => {
  const query = gql`
    query MainNav($site: String) {
      nav(handle: "top_navigation") {
        title
        handle
        max_depth
        expects_root
        tree(site: $site) {
          ...NavItemFields
          children {
            ...NavItemFields
            children {
              ...NavItemFields
              children {
                ...NavItemFields
              }
            }
          }
        }
      }
    }

    fragment NavItemFields on NavTreeBranch {
      page {
        title
        entry_id
        permalink
        ...NavEntryPageFieldsHome
        ...NavEntryPageFieldsAbout
        ...NavEntryPageFieldsAcademics
        ...NavEntryPageFieldsAdministrativeDepartments
        ...NavEntryPageFieldsAdmissions
        ...NavEntryPageFieldsCollegeLife
        ...NavEntryPageFieldsEducationCenters
        ...NavEntryPageFieldsHelpSupport
        ...NavEntryPageFieldsMasterDegree
        ...NavEntryPageFieldsNewsEvents
        ...NavEntryPageFieldsResearch
        ...NavEntryPageFieldsExterallink
      }
      depth
    }

    fragment NavEntryPageFieldsHome on NavEntryPage_TopNavigation_Pages_Home {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 717, height: 460)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
      nav_link
      unique_dropdown
      special_link
      special_link_mobile
    }

    fragment NavEntryPageFieldsAbout on NavEntryPage_TopNavigation_Pages_About {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 717, height: 460)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
      nav_link
      unique_dropdown
      special_link
      special_link_mobile
    }
    fragment NavEntryPageFieldsAcademics on NavEntryPage_TopNavigation_Pages_Academics {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 717, height: 460)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
      nav_link
      unique_dropdown
      special_link
      special_link_mobile
    }
    fragment NavEntryPageFieldsAdministrativeDepartments on NavEntryPage_TopNavigation_Pages_AdministrativeDepartments {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 717, height: 460)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
      nav_link
      unique_dropdown
      special_link
      special_link_mobile
    }

    fragment NavEntryPageFieldsAdmissions on NavEntryPage_TopNavigation_Pages_Admissions {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 717, height: 460)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
      nav_link
      unique_dropdown
      special_link
      special_link_mobile
    }

    fragment NavEntryPageFieldsCollegeLife on NavEntryPage_TopNavigation_Pages_CollegeLife {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 717, height: 460)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
      nav_link
      unique_dropdown
      special_link
      special_link_mobile
    }

    fragment NavEntryPageFieldsEducationCenters on NavEntryPage_TopNavigation_Pages_EducationCenters {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 717, height: 460)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
      nav_link
      unique_dropdown
      special_link
      special_link_mobile
    }

    fragment NavEntryPageFieldsHelpSupport on NavEntryPage_TopNavigation_Pages_HelpSupport {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 717, height: 460)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
      nav_link
      unique_dropdown
      special_link
      special_link_mobile
    }

    fragment NavEntryPageFieldsMasterDegree on NavEntryPage_TopNavigation_Pages_MasterDegree {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 717, height: 460)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
      nav_link
      unique_dropdown
      special_link
      special_link_mobile
    }

    fragment NavEntryPageFieldsNewsEvents on NavEntryPage_TopNavigation_Pages_NewsEvents {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 717, height: 460)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
      nav_link
      unique_dropdown
      special_link
      special_link_mobile
    }

    fragment NavEntryPageFieldsResearch on NavEntryPage_TopNavigation_Pages_Research {
      slug
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 717, height: 460)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
      nav_link
      unique_dropdown
      special_link
      special_link_mobile
    }

    fragment NavEntryPageFieldsExterallink on NavBasicPage_TopNavigation {
      external_link
      small_menu
      with_background_image
      background_image {
        src(width: 717, height: 460)
        ... on Asset_Assets {
          alt
        }
      }
      external_link
      section_link
      section_slug
      section_id
      nav_link
      unique_dropdown
      special_link
      special_link_mobile
    }
  `;
  return query;
};
