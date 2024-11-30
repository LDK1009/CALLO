import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // styled-components 설정 활성화
  },
};

export default nextConfig;
