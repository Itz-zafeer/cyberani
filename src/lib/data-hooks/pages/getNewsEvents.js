import { getClient } from "@/lib/client";
import { newsEventQuery } from "@/lib/queries/pages/newsEventQuery";

const getNewsEvents = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };
  try {
    const { data } = await getClient().query({
      query: newsEventQuery(),
      variables
    });
    return data;
  } catch (error) {
    console.log("errrror:: " + error);
  }
};

export default getNewsEvents;
