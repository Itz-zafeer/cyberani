import HomePage from "@/components/home/Index";
import Layout from "@/components/layout/Index";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

const page = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const isAr = locale == "ar";
  return (
    <>
      <Layout arabic={isAr}>
        <HomePage arabic={isAr} />
      </Layout>
    </>
  );
};

export default page;
