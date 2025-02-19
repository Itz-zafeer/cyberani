import { getClient } from "@/lib/client";
import { departmentQuery } from "@/lib/queries/pages/departments/departmentQuery";

const getDepartmentData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "english",
    slug
  };
  try {
    const { data } = await getClient().query({
      query: departmentQuery(),
      variables
    });
    return data;
  } catch (error) {
    console.log("errrror:: " + error);
  }
};

export default getDepartmentData;
