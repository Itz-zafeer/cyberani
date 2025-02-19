import { getClient } from "@/lib/client";
import { collegeQuery } from "@/lib/queries/pages/collegeQuery";

const getCollegeData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };
  try {
    const { data } = await getClient().query({
      query: collegeQuery(),
      variables
    });
    return data;
  } catch (error) {
    console.log("errrror:: " + error);
  }
};

export default getCollegeData;
