import { getClient } from "@/lib/client";
import { programQuery } from "@/lib/queries/pages/programs/programQuery";
const getProgramData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };
  try {
    const { data } = await getClient().query({
      query: programQuery(),
      variables
    });
    return data;
  } catch (error) {
    console.log("errrror:: " + error);
  }
};

export default getProgramData;
