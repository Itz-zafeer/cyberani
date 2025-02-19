import getPagesData from "./getPagesData";
import getAboutData from "./pages/getAboutData";
import getAcademicsData from "./pages/getAcademicsData";
import getAdministrativeData from "./pages/getAdministrativeData";
import getAdmissionsData from "./pages/getAdmissionsData";
import getCollegeData from "./pages/getCollegeData";
import getEducationCenter from "./pages/getEducationCenter";
import getHelpSupportData from "./pages/getHelpSupportData";
import getHomeData from "./pages/getHomeData";
import getNewsEvents from "./pages/getNewsEvents";
import getPrivacyData from "./pages/getPrivacyData";
import getResearchData from "./pages/getResearchData";

const getData = async (slug, isAr, current_page) => {
  const pagesData = await getPagesData(isAr);
  const pages = pagesData?.pages?.data;
  const handleData = async (blueprint) => {
    switch (blueprint) {
      case "home":
        return await getHomeData(slug, isAr);
      case "about":
        return await getAboutData(slug, isAr);
      case "administrative_departments":
        return await getAdministrativeData(slug, isAr);
      case "research":
        return await getResearchData(slug, isAr);
      case "college_life":
        return await getCollegeData(slug, isAr);
      case "help_support":
        return await getHelpSupportData(slug, isAr);
      case "academics":
        return await getAcademicsData(slug, isAr);
      case "admissions":
        return await getAdmissionsData(slug, isAr);
      case "education_centers":
        return await getEducationCenter(slug, isAr);
      case "news_events":
        return await getNewsEvents(slug, isAr);
      case "common_page":
        return await getPrivacyData(slug, isAr);
      //   case "about":
      //     return await getAboutData(slug, isAr);
      //   case "leadership":
      //     return await getLeadershipData(slug, isAr);
      //   case "career":
      //     return await getCareerData(slug, isAr);
      //   case "products":
      //     return await getProductPageData(slug, isAr);
      //   case "sustainability":
      //     return await getSustainabilityData(slug, isAr);
      //   case "contactus":
      //     return await getContactData(slug, isAr);
      //   case "currentopp":
      //     return await getCurrentOpportunitiesData(slug, isAr, current_page);
      //   case "news":
      //     return await getNewsData(slug, isAr, current_page);
      //   case "page":
      //     return await getPrivacy(slug, isAr);
    }
  };

  for (const page of pages) {
    if (page.slug === slug) {
      const data = await handleData(page.blueprint);
      return data;
    }
  }
  return slug;
};

export default getData;
