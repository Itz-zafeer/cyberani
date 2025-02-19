import { getClient } from "@/lib/client";
import { newsQueryGQL } from "@/lib/queries/pages/news/newsQueryGQL";

const getNewsData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };
  try {
    const { data } = await getClient().query({
      query: newsQueryGQL(),
      variables
    });
    return data;
  } catch (error) {
    console.log("errrror:: " + error);
  }
};

export default getNewsData;
