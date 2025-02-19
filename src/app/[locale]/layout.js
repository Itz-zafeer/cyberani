import "swiper/css";
import "../globals.css";
import "swiper/css/navigation";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import getStaticMetaData from "@/utils/seo/getStaticMetaData";
import Script from "next/script";
import { Suspense } from "react";
import Loading from "./loading";
import GoogleAnalytics from "./GoogleAnalytics";

export const metadata = getStaticMetaData({
  title: "Jeddah International College || Home Page",
  description:
    "tart your educational journey with us & let us guide you towards your success path.",
  isRobotFollow: true,
});

export default async function LocaleLayout({ children, params: { locale } }) {
  return (
    <html
      lang={locale}
      dir={locale == "ar" ? "rtl" : "ltr"}
      className={locale == "ar" ? "rtl" : "ltr"}
    >
      <body>
        <GoogleAnalytics />
        <NextIntlClientProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
