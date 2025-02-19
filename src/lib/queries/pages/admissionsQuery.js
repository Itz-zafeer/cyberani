const { gql } = require("@apollo/client");

export const admissionsQuery = () => {
  const query = gql`
    query Page($site: String, $slug: String!) {
      page: entry(slug: $slug, site: $site, collection: "pages") {
        ...CommonFields
        ... on Entry_Pages_Admissions {
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
          tab_items {
            ... on Set_TabItems_SimpleTextTab {
              id
              tab_tab_title
              tab_child_to_parent
              tab_has_content
              tab_top_heading
              tab_description
              type
            }
            ... on Set_TabItems_TimelineTab {
              id
              tab_tab_title
              tab_child_to_parent
              tab_has_content
              tab_top_heading
              tab_timeline {
                ... on Set_TabItems_TabTimeline_TimelineItems {
                  timeline_item_icon {
                    extension
                    permalink
                  }
                  timeline_item_title
                  timeline_item_description
                  timeline_item_link_text
                  timeline_item_link
                  timeline_item_external_link
                }
              }
              tab_prompt_title
              tab_prompt_description
              has_special_consideration_section
              special_consideration_title
              special_consideration_description
              type
            }
            ... on Set_TabItems_BoxesTab {
              id
              tab_tab_title
              tab_child_to_parent
              tab_has_content
              tab_top_heading
              tab_boxes {
                ... on Set_TabItems_TabBoxes_TabBoxes {
                  tab_box_icon {
                    extension
                    permalink
                  }
                  tab_box_heading
                }
              }
              type
            }
            ... on Set_TabItems_ListTab {
              id
              tab_tab_title
              tab_child_to_parent
              tab_has_content
              tab_top_heading
              tab_list
              type
            }
            ... on Set_TabItems_ScholarshipDiscount {
              id
              type
              tab_tab_title
              tab_child_to_parent
              tab_has_content
              tab_top_heading
              scholarship_discount_description
              scholarship_discount_boxes {
                ... on Set_TabItems_ScholarshipDiscountBoxes_NewSet {
                  box_icon {
                    extension
                    permalink
                    ... on Asset_Assets {
                      alt
                    }
                  }
                  box_big_label
                  box_small_label
                  box_big_description
                }
              }
              scholarship_discount_heading_two
              scholarship_discount_description_two
              scholarship_discount_boxes_two {
                ... on Set_TabItems_ScholarshipDiscountBoxesTwo_NewSet {
                  box_big_label
                  box_small_label
                  box_big_description
                }
              }
              scholarship_discount_heading_three
              scholarship_discount_description_three
              scholarship_discount_boxes_three {
                ... on Set_TabItems_ScholarshipDiscountBoxesThree_NewSet {
                  box_big_label
                  box_small_label
                  box_big_description
                }
              }
              scholarship_discount_heading_four
              scholarship_discount_boxes_four {
                ... on Set_TabItems_ScholarshipDiscountBoxesFour_NewSet {
                  box_big_label
                  box_small_label
                  box_big_description
                }
              }
              scholarship_discount_heading_five
              scholarship_discount_description_five
              scholarship_discount_bottom_note
            }
            ... on Set_TabItems_WithoutContentTab {
              tab_tab_title
              tab_child_to_parent
              tab_has_content
              tab_top_heading
              type
            }
            ... on Set_TabItems_DiscountTab {
              id
              tab_tab_title
              tab_child_to_parent
              tab_has_content
              tab_top_heading
              discount_description
              discount_boxes {
                ... on Set_TabItems_DiscountBoxes_NewSet {
                  box_big_label
                  box_small_label
                  box_big_description
                }
              }
              discount_heading_two
              discount_box_two_big_label
              discount_box_two_small_label
              discount_box_two_big_description
              discount_heading_three
              discount_box_three_big_description
              discount_box_bottom_note
              discount_boxes_two {
                ... on Set_TabItems_DiscountBoxesTwo_NewSet {
                  box_big_label
                  box_small_label
                  box_big_description
                }
              }
              type
            }
          }
          ready_to_title_heading
          ready_to_description
          ready_to_link_text
          ready_to_link
          ready_to_external_link
          ready_to_top_title_heading
          ready_to_contact_link_text
          ready_to_contact_link
          ready_to_contact_external_link
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

    fragment CommonFields on EntryInterface {
      published
      blueprint
      locale

      slug
    }
  `;
  return query;
};
