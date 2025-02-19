export const newsQuery = `
     query Page($site: String,$current_page:Int!,$filter:String) {
     news: entries(
        collection: "news"
        site: $site
        page:$current_page
        limit: 6
        sort: ["date desc"]
        filter:{news_category:{ contains: $filter }}
      ) {
       data {
          ... on Entry_News_News {
            title
            is_event
            news_category {
              title
              slug
            }
            thumb_image {
              src(width: 566, height: 568)
              extension
            }
            date: publish_date(format: "M d, Y")
            start_date(format: "M d, Y")
            end_date(format: "M d, Y")
            location
            organizer
          }
          slug
          title
        }
        total
        per_page
        current_page
        from
        to
        last_page
        has_more_pages
        }
    }
  `;
