const { gql } = require("@apollo/client");

export const footerQuery = () => {
  const query = gql`
    query BottomNav($site: String) {
      nav(handle: "bottom_navigation") {
        title
        handle
        tree(site: $site) {
          page {
            title
            entry_id
            permalink
            ...NavEntryPageFieldsAcademics
            ...NavEntryPageFieldsAbout
            ...NavEntryPageFieldsHome
            ...NavEntryPageFieldsAdministrativeDepartments
            ...NavEntryPageFieldsCollegeLife
            ...NavEntryPageFieldsHelpSupport
            ...NavEntryPageFieldsMasterDegree
            ...NavEntryPageFieldsNewsEvents
            ...NavEntryPageFieldsResearch
          }
          children {
            page {
              title
              permalink
              ...NavEntryPageFieldsAcademics
              ...NavEntryPageFieldsAbout
              ...NavEntryPageFieldsHome
              ...NavEntryPageFieldsAdministrativeDepartments
              ...NavEntryPageFieldsCollegeLife
              ...NavEntryPageFieldsHelpSupport
              ...NavEntryPageFieldsMasterDegree
              ...NavEntryPageFieldsNewsEvents
              ...NavEntryPageFieldsResearch
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
          small_menu {
            ... on Set_SmallMenu_NewSet {
              small_menu_link_text
              small_menu_link
              small_menu_external_link
            }
          }
          footer_logo_note
          phone_number
          email_address
          physical_add
          physical_address_link

          whatsapp_number
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

    fragment NavEntryPageFieldsAcademics on NavEntryPage_BottomNavigation_Pages_Academics {
      external_link
      nav_link
    }

    fragment NavEntryPageFieldsAbout on NavEntryPage_BottomNavigation_Pages_About {
      external_link
      nav_link
    }

    fragment NavEntryPageFieldsHome on NavEntryPage_BottomNavigation_Pages_Home {
      external_link
      nav_link
    }

    fragment NavEntryPageFieldsAdministrativeDepartments on NavEntryPage_BottomNavigation_Pages_AdministrativeDepartments {
      external_link
      nav_link
    }

    fragment NavEntryPageFieldsCollegeLife on NavEntryPage_BottomNavigation_Pages_CollegeLife {
      external_link
      nav_link
    }

    fragment NavEntryPageFieldsHelpSupport on NavEntryPage_BottomNavigation_Pages_HelpSupport {
      external_link
      nav_link
    }

    fragment NavEntryPageFieldsMasterDegree on NavEntryPage_BottomNavigation_Pages_MasterDegree {
      external_link
      nav_link
    }

    fragment NavEntryPageFieldsNewsEvents on NavEntryPage_BottomNavigation_Pages_NewsEvents {
      external_link
      nav_link
    }

    fragment NavEntryPageFieldsResearch on NavEntryPage_BottomNavigation_Pages_Research {
      external_link
      nav_link
    }
  `;
  return query;
};
