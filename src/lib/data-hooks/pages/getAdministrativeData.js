import { getClient } from "@/lib/client";
import { administrativeQuery } from "@/lib/queries/pages/administrativeQuery";

const getAdministrativeData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };
  try {
    const { data } = await getClient().query({
      query: administrativeQuery(),
      variables
    });
    return data;
  } catch (error) {
    console.log("errrror:: " + error);
  }
};

export default getAdministrativeData;
