import { getClient } from "@/lib/client";
import { researchQuery } from "@/lib/queries/pages/researchQuery";

const getResearchData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };
  try {
    const { data } = await getClient().query({
      query: researchQuery(),
      variables
    });
    return data;
  } catch (error) {
    console.log("errrror:: " + error);
  }
};

export default getResearchData;
