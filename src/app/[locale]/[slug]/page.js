import getData from "@/lib/data-hooks/getData";
import React, { Suspense } from "react";
import Loading from "../loading";
import Layout from "@/components/layout/Index";
import AdministrativeDepartmentsPage from "@/components/administrative-departments/Index";
import ResearchPage from "@/components/research/Index";
import AboutPage from "@/components/about-jic/Index";
import CollegeLifePage from "@/components/collegelife/Index";
import HelpAndSupportPage from "@/components/help-and-support/Index";
import AllAcademicsPage from "@/components/all-academics/Index";
import AdmissionsPage from "@/components/admissions/Index";
import SingleEducationPage from "@/components/single-education/Index";
import NewsAndEventsPage from "@/components/news-and-events/Index";
import PrivacyPolicy from "@/components/privacy-policy/Index";
import getFormattedDropdownData from "@/utils/getFormattedDropdownData";
import { notFound, redirect } from "next/navigation";
import getMetaData from "@/utils/seo/getMetaData";
import getTranslationsData from "@/lib/data-hooks/layout/getTranslationsData";
import { locales } from "@/middleware";
import { unstable_setRequestLocale } from "next-intl/server";

export const revalidate = 5;

const slugs = [
  "about-jic",
  "administrative-departments",
  "research",
  "college-life",
  "admissions",
  "help-support",
  "academics",
  // "news-events",
  "education-centers",
  // "privacy-policy",
  // "terms-conditions"
];
export function generateStaticParams() {
  return slugs.map((slug) => {
    locales.map((locale) => ({ slug, locale }));
  });
}

export async function generateMetadata({ params: { locale, slug } }) {
  return await getMetaData({ slug: slug, isAr: locale == "ar" });
}

const page = async ({ params: { locale, slug } }) => {
  unstable_setRequestLocale(locale);
  const isAr = locale == "ar";
  if (slug == "e-services-ar") {
    redirect("/ar");
  } else if (
    slug == "e-services-ar" ||
    slug == "e-services-en" ||
    slug == "e-services"
  ) {
    redirect((isAr ? "/ar" : "") + "/");
  } else if (slug == "about-us") {
    redirect((isAr ? "/ar" : "") + "/about-jic");
  } else if (slug == "facilities") {
    redirect((isAr ? "/ar" : "") + "/college-life");
  } else if (
    slug == "admission" ||
    slug == "fees" ||
    slug == "fees-ar" ||
    slug == "apply-now-en" ||
    slug == "apply-now"
  ) {
    redirect((isAr ? "/ar" : "") + "/admissions");
  } else if (slug == "apply-now-ar") {
    redirect("/ar/admissions");
  } else if (slug == "bachelors-programs") {
    redirect((isAr ? "/ar" : "") + "/academics");
  } else if (
    slug == "undergraduate-studies-ar" ||
    slug == "graduate-studies-ar"
  ) {
    redirect("/ar/academics");
  } else if (slug == "contact-us") {
    redirect((isAr ? "/ar" : "") + "/help-support");
  }
  const data = await getData(slug, isAr);
  const translationsData = await getTranslationsData(isAr);
  let translations = null;

  try {
    const jsonString = translationsData?.globalSet?.json?.code;
    if (jsonString) {
      translations = JSON.parse(jsonString);
    } else {
      console.error("JSON string is undefined or null");
    }
  } catch (error) {
    console.error("Invalid JSON:", error);
  }

  switch (data?.page?.blueprint) {
    case "about":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <AboutPage
              arabic={isAr}
              data={data?.page}
              translations={translations}
            />
          </Layout>
        </Suspense>
      );
    case "administrative_departments":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <AdministrativeDepartmentsPage arabic={isAr} data={data?.page} />
          </Layout>
        </Suspense>
      );
    case "research":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <ResearchPage
              arabic={isAr}
              data={data?.page}
              researchData={data?.research?.data}
            />
          </Layout>
        </Suspense>
      );
    case "college_life":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <CollegeLifePage
              arabic={isAr}
              data={data?.page}
              newsEvents={data?.entries?.data}
            />
          </Layout>
        </Suspense>
      );
    case "admissions":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <AdmissionsPage data={data?.page} />
          </Layout>
        </Suspense>
      );
    case "help_support":
      const {
        programsDropdownData,
        degreeDropdownData,
        departmentsDropdownData,
      } = await getFormattedDropdownData({
        programs: data?.programs,
        degrees: data?.program_categories,
        departments: data?.department_categories,
      });
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <HelpAndSupportPage
              arabic={isAr}
              data={data?.page}
              nonFormatedData={{
                programs: data?.programs,
                degrees: data?.program_categories,
                departments: data?.department_categories,
              }}
              programsDropdownData={programsDropdownData}
              degreeDropdownData={degreeDropdownData}
              departmentsDropdownData={departmentsDropdownData}
              globalIcons={data?.globalSet?.social_icons}
              translations={translations}
            />
          </Layout>
        </Suspense>
      );
    case "academics":
      const {
        degreeDropdownData: programCategories,
        departmentsDropdownData: departmentCategories,
      } = await getFormattedDropdownData({
        degrees: data?.program_categories,
        departments: data?.department_categories,
        academicPage: true,
      });
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <AllAcademicsPage
              arabic={isAr}
              nonFormatedData={{
                degrees: data?.program_categories,
                departments: data?.department_categories,
              }}
              data={data?.page}
              programsData={data?.programs?.data}
              departmentCategories={departmentCategories}
              programCategories={programCategories}
              translations={translations}
              // resetFilterText={

              //   translations?.layout?.academicsPageResetFilterText
              // }
              // errorText={translations?.layout?.academicsPageErrorMsg}
            />
          </Layout>
        </Suspense>
      );
    case "news_events":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <NewsAndEventsPage
              arabic={isAr}
              data={data?.page}
              categories={data?.terms?.data}
              news={data?.news}
              translations={translations}
            />
          </Layout>
        </Suspense>
      );

    case "education_centers":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <SingleEducationPage
              mobileImg={data?.hero_fallback_mobile_image?.src}
              data={data?.page}
              arabic={isAr}
            />
          </Layout>
        </Suspense>
      );
    case "common_page":
      return (
        <Suspense fallback={<Loading />}>
          <Layout arabic={isAr}>
            <PrivacyPolicy arabic={isAr} data={data?.page} />
          </Layout>
        </Suspense>
      );
    default:
      return notFound();
  }
};

export default page;
