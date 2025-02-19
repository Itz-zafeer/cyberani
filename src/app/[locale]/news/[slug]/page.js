import Layout from "@/components/layout/Index";
import SinglePage from "@/components/single-page/Index";
import getNewsData from "@/lib/data-hooks/pages/news/getNewsData";
import getMetaData from "@/utils/seo/getMetaData";
import { notFound } from "next/navigation";
import React from "react";

export const revalidate = 5;
export async function generateMetadata({ params: { locale, slug } }) {
  return await getMetaData({ slug: slug, isAr: locale == "ar" });
}

const page = async ({ params: { locale, slug } }) => {
  const isAr = locale == "ar";
  const data = await getNewsData(slug, isAr);
  if (!data?.page?.title) {
    return notFound();
  }
  return (
    <Layout arabic={isAr}>
      <SinglePage arabic={isAr} data={data?.page} newsData={data?.news?.data} />
    </Layout>
  );
};

export default page;
