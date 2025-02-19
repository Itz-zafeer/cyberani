import { getClient } from "@/lib/client";
import { helpSupportQuery } from "@/lib/queries/pages/helpSupportQuery";

const getHelpSupportData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };
  try {
    const { data } = await getClient().query({
      query: helpSupportQuery(),
      variables
    });
    return data;
  } catch (error) {
    console.log("errrror:: " + error);
  }
};

export default getHelpSupportData;
