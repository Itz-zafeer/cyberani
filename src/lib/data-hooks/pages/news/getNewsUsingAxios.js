import axiosRequest from "@/lib/axiosRequest";
import { newsQuery } from "@/lib/queries/pages/news/newsQuery";

const getNewsUsingAxios = async (current_page, filter, isAr) => {
  const variables = {
    current_page: current_page,
    site: isAr ? "arabic" : "english",
    filter
  };

  const reqData = JSON.stringify({
    query: newsQuery,
    variables: variables
  });
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    // url: "https://saudibanks.brackets-tech.com/graphql",
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
    headers: {
      "Content-Type": "application/json"
    },
    data: reqData
  };
  const data = await axiosRequest(config);
  return data;
};

export default getNewsUsingAxios;
