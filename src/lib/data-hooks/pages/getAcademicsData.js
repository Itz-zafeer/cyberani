import { getClient } from "@/lib/client";
import { academicsQuery } from "@/lib/queries/pages/academicsQuery";

const getAcademicsData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };
  try {
    const { data } = await getClient().query({
      query: academicsQuery(),
      variables
    });
    return data;
  } catch (error) {
    console.log("errrror:: " + error);
  }
};

export default getAcademicsData;
