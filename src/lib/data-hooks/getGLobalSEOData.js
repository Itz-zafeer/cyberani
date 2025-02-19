import { getClient } from "../client";
import { globalSEOQuery } from "../queries/globalSEOQuery.js";

const getGLobalSEOData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english"
  };
  try {
    const { data } = await getClient().query({
      query: globalSEOQuery(),
      variables
    });
    return data;
  } catch (error) {
    console.log("errrror:: " + error);
  }
};

export default getGLobalSEOData;
