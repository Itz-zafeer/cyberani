import { getClient } from "@/lib/client";
import { educationQuery } from "@/lib/queries/pages/educationQuery";

const getEducationCenter = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };
  try {
    const { data } = await getClient().query({
      query: educationQuery(),
      variables
    });
    return data;
  } catch (error) {
    console.log("errrror:: " + error);
  }
};

export default getEducationCenter;
