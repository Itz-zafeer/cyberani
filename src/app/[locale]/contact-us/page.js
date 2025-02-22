import ContactUsPage from "@/components/contact-us/Index";
import Layout from "@/components/layout/Index";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

const page = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const isAr = locale == "ar";
  return (
    <>
      <Layout arabic={isAr}>
        <ContactUsPage arabic={isAr} />
      </Layout>
    </>
  );
};

export default page;
