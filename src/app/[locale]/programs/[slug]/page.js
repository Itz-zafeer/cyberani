import Layout from "@/components/layout/Index";
import SingleProgramPage from "@/components/single-program/Index";
import getProgramData from "@/lib/data-hooks/pages/programs/getProgramData";
import getMetaData from "@/utils/seo/getMetaData";
import { notFound } from "next/navigation";

export const revalidate = 5;

export async function generateMetadata({ params: { locale, slug } }) {
  const isAr = locale == "ar";
  const data = await getProgramData(slug, isAr);
  return await getMetaData({
    slug: slug,
    isAr,
    initalData: data,
  });
}

const page = async ({ params: { locale, slug } }) => {
  const isAr = locale == "ar";
  const data = await getProgramData(slug, isAr);

  if (!data?.page?.title) {
    return notFound();
  }
  return (
    <Layout arabic={isAr}>
      <SingleProgramPage fromProgramPage data={data?.page} arabic={isAr} />
    </Layout>
  );
};

export default page;
