import Layout from "@/components/layout/Index";
import MediaCenterPage from "@/components/media-center/Index";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

const page = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const isAr = locale == "ar";
  return (
    <>
      <Layout arabic={isAr}>
        <MediaCenterPage arabic={isAr} />
      </Layout>
    </>
  );
};

export default page;
