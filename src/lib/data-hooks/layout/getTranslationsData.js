import { getClient } from "@/lib/client";
import { translationQuery } from "@/lib/queries/layout/translationQuery";

const getTranslationsData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english"
  };
  try {
    const { data } = await getClient().query({
      query: translationQuery(),
      variables
    });
    return data;
  } catch (error) {
    console.log("errrror:: " + error);
  }
};

export default getTranslationsData;
