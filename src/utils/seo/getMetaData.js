import getData from "@/lib/data-hooks/getData";
import getPagesData from "@/lib/data-hooks/getPagesData";
import getGLobalSEOData from "@/lib/data-hooks/getGLobalSEOData";

const getMetaData = async ({ slug, isAr, initalData }) => {
  const {
    pages: { data: pagesData },
  } = await getPagesData(isAr);
  const data = initalData || (await getData(slug, isAr));
  const globalSeo = await getGLobalSEOData(isAr);

  // const pageSeo = data?.page?.seo_section;
  const fallbackSeo = globalSeo?.globalSet;
  const websiteName = fallbackSeo?.site_name;
  const title = data?.page?.seo_title
    ? data?.page?.seo_title + " - " + websiteName
    : fallbackSeo?.seo_title + " - " + websiteName;
  const description = data?.page?.seo_description
    ? data?.page?.seo_description
    : fallbackSeo?.seo_description;
  const keywords = data?.page?.seo_keywords
    ? data?.page?.seo_keywords
    : fallbackSeo?.seo_keywords;
  const image = data?.page?.seo_image?.src
    ? data?.page?.seo_image?.src
    : fallbackSeo?.seo_image?.src;
  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      images: [image],
      width: 1200,
      height: 628,
    },
    twitter: {
      title: title,
      description: description,
      images: [image],
      width: 1200,
      height: 628,
    },
  };
};

export default getMetaData;
