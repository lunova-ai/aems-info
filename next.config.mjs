import withMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX()(nextConfig);


