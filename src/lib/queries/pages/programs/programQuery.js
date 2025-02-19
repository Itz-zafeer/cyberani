const { gql } = require("@apollo/client");

export const programQuery = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, collection: "program", site: $site) {
        title

        slug
        id
        locale
        last_modified
        blueprint
        ... on Entry_Program_Program {
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
          has_program_overview
          program_overview_heading
          program_overview_description
          program_overview_properties_col {
            label
            value
          }
          program_overview_properties {
            ... on Set_ProgramOverviewProperties_NewSet {
              property_icon {
                extension
                permalink
              }
              property_title
              property_sub_title
            }
          }
          has_target_audience
          target_audience_heading
          target_audience_proper {
            ... on Set_TargetAudienceProper_NewSet {
              icon: target_audience_icon {
                extension
                permalink
              }
              content: target_audience_heading
            }
          }
          has_program_goals
          primary_goal_heading
          primary_goal_description
          program_goals_number_of_column {
            label
            value
          }
          program_goals_properties {
            ... on Set_ProgramGoalsProperties_NewSet {
              content: description
            }
          }
          career_opportunity_heading
          has_career_track_opportunit
          has_tracks
          track_properties_col {
            label
            value
          }
          career_track_heading_small
          track_pro {
            ... on Set_TrackPro_NewSet {
              property_icon {
                extension
                permalink
              }
              property_description
            }
          }
          has_opportunities
          career_opportunity_heading_small
          opportunities_properties_duplicate {
            ... on Set_OpportunitiesPropertiesDuplicate_NewSet {
              property_icon {
                extension
                permalink
              }
              property_description
            }
          }
          has_study_time
          study_times_heading
          study_times_note
          study_times {
            ... on Set_StudyTimes_NewSet {
              row_data
              row_heading
            }
          }
          has_study_plan
          study_plan_heading
          study_plan {
            ... on Set_StudyPlan_NewSet {
              year_text
              semester_items {
                ... on Set_StudyPlan_SemesterItems_NewSet {
                  extra_column_data {
                    ... on Set_StudyPlan_SemesterItems_ExtraColumnData_NewSet {
                      column_values
                    }
                  }
                  semester_title
                  total_credit_hours_text
                  total_credit_hours_total
                  column_data {
                    ... on Set_StudyPlan_SemesterItems_ColumnData_NewSet {
                      column_title
                      column_values
                    }
                  }
                }
              }
            }
          }
          study_plan_note
          study_plan_download_link_text
          study_plan_download_link
          study_plan_download_external_link
          has_faculty_member_section
          faculty_section_heading
          selected_faculty_members {
            ... on Entry_FacultyMembers_FacultyMember {
              title
              faculty_member_image_special {
                extension
                permalink
              }
              faculty_member_position
              faculty_member_description
              faculty_member_email
            }
          }
          show_how_to_apply
          how_to_apply_title_heading
          how_to_apply_description
          how_to_apply_link_text
          how_to_apply_link
          how_to_apply_external_link
          how_to_apply_top_title_heading
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
          how_to_apply_two_link_text
          how_to_apply_two_link
          how_to_apply_two_external_link
          has_program_procedure
          service_procedures_heading
          service_procedures_list
          has_program_structure
          program_structure_heading
          program_structure_description
          program_structure_table {
            ... on Set_ProgramStructureTable_NewSet {
              table_column_text
              table_item_values
              type
            }
          }
          program_structure_points {
            ... on Set_ProgramStructurePoints_NewSet {
              point_text
            }
          }
          has_required_scores
          required_scores_heading
          required_scores_description
          required_scores_table {
            ... on Set_RequiredScoresTable_NewSet {
              tabel_column_text
              row_data_values
              type
            }
          }
          has_delivery_mode
          delivery_mode_heading
          delivery_mode_description
          delivery_tabs {
            ... on Set_DeliveryTabs_NewSet {
              tab_title
              course_overview_heading
              course_overview_description
              course_outcome_heading
              course_outcome_description
              modules_covered_heading
              modules_covered_description
              duration_course_heading
              duration_course_description
              id
              type
              duration_course_icon {
                extension
                permalink
              }
            }
          }
          has_delivery_mode_two
          delivery_mode_two_heading
          delivery_mode_two_description
          delivery_mode_two_boxes {
            ... on Set_DeliveryModeTwoBoxes_NewSet {
              box_icon {
                extension
                permalink
              }
              box_heading
              box_description
            }
          }
          delivery_mode_two_table {
            ... on Set_DeliveryModeTwoTable_NewSet {
              table_column_text
              table_column_data
            }
          }
          delivery_mode_two_assessment_heading
          delivery_mode_two_assessment_description
          delivery_mode_two_assessment_poin {
            ... on Set_DeliveryModeTwoAssessmentPoin_NewSet {
              point_icon {
                extension
                permalink
              }
              point_text
            }
          }
          has_courses_covered
          courses_covered_heading
          courses_covered_description
          courses_covered_points
          has_admission_requirements
          admission_requirements_heading
          admission_requirements_score_small_heading
          admission_requirements_scores_points {
            ... on Set_AdmissionRequirementsScoresPoints_NewSet {
              score_label
              score_number
              score_small_heading
            }
          }
          collage_fee_note_description
          admission_requirements_qualifications_small_heading
          admission_requirements_qualifications_list
          admission_requirements_collage_life_small_heading
          admission_show_scores_on_top
          admission_requirements_collage_fee_points {
            ... on Set_AdmissionRequirementsCollageFeePoints_NewSet {
              point_label
              point_number
              point_small_label
            }
          }
        }
      }
    }
  `;
  return query;
};
