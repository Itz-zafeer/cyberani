const { default: axios } = require("axios");

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.jicollege.edu.sa", // Replace with your domain
  generateRobotsTxt: true,
  //   exclude: ["/admin", "/api/*"], // Exclude paths as needed
  sitemapSize: 7000,
  additionalPaths: async (config) => {
    const locales = ["", "en", "ar"]; // Add your supported locales
    const dynamicRoutes = await fetchDynamicRoutes();
    console.log(dynamicRoutes);
    // Generate localized paths
    return dynamicRoutes.flatMap((route) => {
      return locales.map((locale) => ({
        loc: `https://www.jicollege.edu.sa/${
          locale ? locale + "/" : ""
        }${route}`, // e.g., /en/post/1 or /ar/post/1
        changefreq: "daily",
        priority: 0.8,
      }));
    });
  },
};

// Simulated dynamic route fetching (adjust for your API or data source)
async function fetchDynamicRoutes() {
  const pagesData = await fetchAllPages();
  //   console.log(pagesData.data?.data?.pages?.data);
  const pages = pagesData.data?.data?.pages?.data;

  const departmentsData = await fetchAllDepartments();
  const departments = departmentsData.data?.data?.pages?.data;

  const programsData = await fetchAllPrograms();
  const programs = programsData.data?.data?.pages?.data;

  let slugs = [];
  pages.forEach((page) => {
    slugs.push(page.slug);
  });
  departments.forEach((department) => {
    slugs.push("department/" + department.slug);
  });
  programs.forEach((program) => {
    slugs.push("programs/" + program.slug);
  });

  return slugs;
}

async function fetchAllPages() {
  const pagesQuery = `
    query AllPages {
      pages: entries(collection: "pages", site: "english") {
        data {
          slug 
        }
      }
    }
  `;

  return await axiosDataFetcher(pagesQuery);
}

async function fetchAllDepartments() {
  const departmentQuery = `query AllPages {
    pages:entries(collection: "department", site: "english") {
        data {
            slug
      }
}
}
`;
  return await axiosDataFetcher(departmentQuery);
}

async function fetchAllPrograms() {
  const prgoramQuery = `query AllPages {
   pages: entries(collection: "program", site: "english") {
        data { 
            slug 
      }
}

}
`;
  return await axiosDataFetcher(prgoramQuery);
}

async function axiosDataFetcher(query) {
  const reqData = JSON.stringify({
    query: query,
  });
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    // url: "https://saudibanks.brackets-tech.com/graphql",
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
    headers: {
      "Content-Type": "application/json",
    },
    data: reqData,
  };
  const data = await axios.request(config);
  return data;
}
module.exports = config;
