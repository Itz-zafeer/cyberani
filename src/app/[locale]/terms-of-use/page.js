import Layout from "@/components/layout/Index";
import TermsOfUsePage from "@/components/terms-of-use/Index";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

const page = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const isAr = locale == "ar";
  return (
    <>
      <Layout arabic={isAr} blackHeader>
        <TermsOfUsePage arabic={isAr} />
      </Layout>
    </>
  );
};

export default page;
