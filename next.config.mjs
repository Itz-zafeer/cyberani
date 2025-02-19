import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.jicollege.edu.sa",
        port: "",
        pathname: "/img/asset/**"
      },
      {
        protocol: "https",
        hostname:
          "jic-s3-bucket.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default withNextIntl(nextConfig);
