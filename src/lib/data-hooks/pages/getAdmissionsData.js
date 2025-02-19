import { getClient } from "@/lib/client";
import { admissionsQuery } from "@/lib/queries/pages/admissionsQuery";

const getAdmissionsData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };
  try {
    const { data } = await getClient().query({
      query: admissionsQuery(),
      variables
    });
    return data;
  } catch (error) {
    console.log("errrror:: " + error);
  }
};

export default getAdmissionsData;
