const { gql } = require("@apollo/client");

export const mainNavQuery = () => {
  const query = gql`
    query MainNav($site: String) {
      nav(handle: "main_navigation") {
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
      globalSet(handle: "global_settings", site: $site) {
        ... on GlobalSet_GlobalSettings {
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
          apply_now_text
          apply_now_menu {
            ... on Set_ApplyNowMenu_NewSet {
              apply_now_link_text
              apply_now_link
              apply_now_external_link
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
        ...NavEntryPageFieldsDepartment
        ...NavEntryPageFieldsProgram
        ...NavEntryPageFieldsExterallink
      }
      depth
    }

    fragment NavEntryPageFieldsHome on NavEntryPage_MainNavigation_Pages_Home {
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

    fragment NavEntryPageFieldsAbout on NavEntryPage_MainNavigation_Pages_About {
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
    fragment NavEntryPageFieldsAcademics on NavEntryPage_MainNavigation_Pages_Academics {
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
    fragment NavEntryPageFieldsAdministrativeDepartments on NavEntryPage_MainNavigation_Pages_AdministrativeDepartments {
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

    fragment NavEntryPageFieldsAdmissions on NavEntryPage_MainNavigation_Pages_Admissions {
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

    fragment NavEntryPageFieldsCollegeLife on NavEntryPage_MainNavigation_Pages_CollegeLife {
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

    fragment NavEntryPageFieldsEducationCenters on NavEntryPage_MainNavigation_Pages_EducationCenters {
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

    fragment NavEntryPageFieldsHelpSupport on NavEntryPage_MainNavigation_Pages_HelpSupport {
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

    fragment NavEntryPageFieldsMasterDegree on NavEntryPage_MainNavigation_Pages_MasterDegree {
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

    fragment NavEntryPageFieldsNewsEvents on NavEntryPage_MainNavigation_Pages_NewsEvents {
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

    fragment NavEntryPageFieldsResearch on NavEntryPage_MainNavigation_Pages_Research {
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
    fragment NavEntryPageFieldsDepartment on NavEntryPage_MainNavigation_Department_Department {
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
    fragment NavEntryPageFieldsProgram on NavEntryPage_MainNavigation_Program_Program {
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

    fragment NavEntryPageFieldsExterallink on NavBasicPage_MainNavigation {
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
