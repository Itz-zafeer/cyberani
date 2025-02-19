import Layout from "@/components/layout/Index";
import SingleEducationPage from "@/components/single-education/Index";
import getDepartmentData from "@/lib/data-hooks/pages/departments/getDepartmentData";
import getMetaData from "@/utils/seo/getMetaData";
import { notFound } from "next/navigation";
import React from "react";

export const revalidate = 5;

export async function generateMetadata({ params: { locale, slug } }) {
  const isAr = locale == "ar";
  const data = await getDepartmentData(slug, isAr);
  return await getMetaData({ slug: slug, isAr, initalData: data });
}
const page = async ({ params: { locale, slug } }) => {
  const isAr = locale == "ar";
  const data = await getDepartmentData(slug, isAr);
  if (!data?.page?.title) {
    return notFound();
  }
  return (
    <Layout arabic={isAr}>
      <SingleEducationPage data={data?.page} arabic={isAr} />
    </Layout>
  );
};

export default page;
