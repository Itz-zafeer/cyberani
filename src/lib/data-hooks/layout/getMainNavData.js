import { getClient } from "@/lib/client";
import { mainNavQuery } from "@/lib/queries/layout/mainNavQuery";

const getMainNavData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english"
  };
  try {
    const { data } = await getClient().query({
      query: mainNavQuery(),
      variables
    });
    return data;
  } catch (error) {
    console.log("errrror:: " + error);
  }
};

export default getMainNavData;
