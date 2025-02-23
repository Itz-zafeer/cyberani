import BlogsSinglePage from "@/components/blogs-single-page/Index";
import Layout from "@/components/layout/Index";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

const page = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const isAr = locale == "ar";
  return (
    <>
      <Layout arabic={isAr} blackHeader>
        <BlogsSinglePage arabic={isAr} />
      </Layout>
    </>
  );
};

export default page;
