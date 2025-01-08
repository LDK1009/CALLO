import type { Metadata, Viewport } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import AppBar from "@/components/common/AppBar";
import Header from "@/components/common/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeRegistry from "@/components/common/ThemeRegistry";
import GlobalStyles from "@/styles/GlobalStyles";
import InfoModal from "@/components/common/InfoModal";
import ContentContainer from "@/components/common/ContentContainer";
import Sidebar from "@/components/common/Sidebar";
import SnackbarProviderComponent from "@/components/common/SnackbarProviderComponent";
import { GoogleAnalytics } from "@next/third-parties/google";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "CALLO(칼로) - 제로 칼로리 쇼핑몰",
  description:
    "제로 칼로리, 제로 슈가, 다이어트 간식 등 다양한 건강한 식품들을 CALLO(칼로)에서 만나보세요! 제로 칼로리 쇼핑몰의 모든 제품을 지금 확인하세요.",
  keywords:
    "제로 칼로리, 제로 슈가, 다이어트 식품, 칼로, 제로 칼로리 쇼핑몰, 다이어트 간식, 저칼로리 식품, 건강한 먹거리",
  openGraph: {
    title: "CALLO(칼로) - 제로 칼로리 쇼핑몰",
    description:
      "제로 칼로리, 제로 슈가 등 다양한 카테고리의 제로 식품들을 CALLO에서 만나보세요. 건강한 다이어트를 위한 최고의 선택!",
    url: "https://www.callo.store/",
    images: [
      {
        url: "https://www.callo.store/img/logo-1.png",
        width: 512,
        height: 512,
        alt: "CALLO 로고",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@CALLO", // 실제 Twitter 계정 추가
    title: "CALLO(칼로) - 제로 칼로리 쇼핑몰",
    description:
      "제로 칼로리, 제로 슈가 등 다양한 카테고리의 제로 식품들을 CALLO(칼로)에서 만나보세요!",
    images: ["https://callo-mu.vercel.app/img/logo-1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json", // 추가된 부분
  icons: {
    icon: "/img/app-icon-192.png",
    apple: "/img/app-icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* PWA 관련 메타 태그 추가 */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/img/app-icon-192.png" />
      </head>
      <body>
        <GlobalStyles />
        <StyledComponentsRegistry>
          <AppRouterCacheProvider>
            <ThemeRegistry>
              <SnackbarProviderComponent />
              <InfoModal />
              <Sidebar />
              <Header />
              <ContentContainer>{children}</ContentContainer>
              <AppBar />
            </ThemeRegistry>
          </AppRouterCacheProvider>
        </StyledComponentsRegistry>
      </body>
      <GoogleAnalytics gaId="G-4X7HXJYF2E" />
    </html>
  );
}
