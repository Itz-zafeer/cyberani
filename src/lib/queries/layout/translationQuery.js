const { gql } = require("@apollo/client");

export const translationQuery = () => {
  const query = gql`
    query GlobalSets($site: String!) {
      globalSet(handle: "translations", site: $site) {
        ... on GlobalSet_Translations {
          json {
            code
            mode
          }
        }
      }
    }
  `;
  return query;
};
