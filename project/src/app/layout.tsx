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

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "CALLO - 제로 칼로리 쇼핑몰",
  description: "제로 칼로리, 제로 슈가 등 다양한 카테고리를 통한 제로 식품들을 만나보세요!",
  keywords: "제로 칼로리, 제로 슈가, 다이어트 식품, 칼로",
  openGraph: {
    title: "CALLO - 제로 칼로리 쇼핑몰",
    description: "제로 칼로리, 제로 슈가 등 다양한 카테고리를 통한 제로 식품들을 만나보세요!",
    url: "https://callo-mu.vercel.app/", // 실제 URL로 변경
    images: [
      {
        url: "/public/img/logo-banner-1.png",
        width: 800,
        height: 600,
        alt: "CALLO 배너",
      },
    ],
    type: "website",
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

const GA_TRACKING_ID = "G-4X7HXJYF2E";

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
      {/* GA4 스크립트 삽입 */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
        }}
      />
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
    </html>
  );
}
