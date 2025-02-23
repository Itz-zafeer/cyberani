import Layout from "@/components/layout/Index";
import ServicePage from "@/components/service-page/Index";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

const page = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const isAr = locale == "ar";
  return (
    <>
      <Layout arabic={isAr}>
        <ServicePage arabic={isAr} />
      </Layout>
    </>
  );
};

export default page;
