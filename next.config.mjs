import nextBundle from "@next/bundle-analyzer";

const withBundleAnalyzer = nextBundle({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["static.isjeady.com"],
  },
  env: {
    GITHUB_APP_CLIENT_ID: "fdcd72fa41ed1c832bcc",
    GITHUB_APP_CLIENT_SECRET: "0080c5cceb914065785a7abe18b29a388961389d",
    NEXTAUTH_SECRET: "mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=",
  },
};

export default withBundleAnalyzer(nextConfig);
