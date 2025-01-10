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
import Script from "next/script";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "CALLO(칼로) - 제로 칼로리 쇼핑몰",
  description:
    "제로 칼로리, 제로 슈가, 다이어트 간식 등 다양한 건강한 식품들을 CALLO(칼로)에서 만나보세요! 제로 칼로리 쇼핑몰의 모든 제품을 지금 확인하세요.",
  keywords: [
    "제로 칼로리",
    "제로 슈가",
    "다이어트 식품",
    "칼로",
    "CALLO",
    "제로 칼로리 쇼핑몰",
    "다이어트 간식",
    "저칼로리 식품",
    "건강한 먹거리",
  ],
  authors: [{ name: "CALLO 팀", url: "https://callo.store" }],
  viewport: "width=device-width, initial-scale=1",
  metadataBase: new URL("https://callo.store"),
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
    description: "제로 칼로리, 제로 슈가 등 다양한 카테고리의 제로 식품들을 CALLO(칼로)에서 만나보세요!",
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
        {/* Google Ads 태그 추가 */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11544522551" />
        <Script id="google-ads-tag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11544522551');
            `}
        </Script>
        {/* Google Ads 이벤트 스니펫 */}
        <Script id="google-ads-event-snipet">
          {` 
    gtag('event', 'conversion', {
      'send_to': 'AW-11544522551/WvQsCPKYoYEaELfe7YAr',
      'value': 1.0,
      'currency': 'KRW'
      });
  `}
        </Script>
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
