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
    NEXTAUTH_SECRET: "E/o1hmM3IfN8y37s0H0Lt2/uR5vRjq6F8f4D+CPYKFA=",
  },
};

export default withBundleAnalyzer(nextConfig);
