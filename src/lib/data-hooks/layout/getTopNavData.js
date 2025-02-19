import { getClient } from "@/lib/client";
import { topNavQuery } from "@/lib/queries/layout/topNavQuery";

const getTopNavData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english"
  };
  try {
    const { data } = await getClient().query({
      query: topNavQuery(),
      variables
    });
    return data;
  } catch (error) {
    console.log("errrror:: " + error);
  }
};

export default getTopNavData;
