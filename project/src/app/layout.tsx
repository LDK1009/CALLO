import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import AppBar from "@/components/common/AppBar";
import Header from "@/components/common/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeRegistry from "@/components/common/ThemeRegistry";
import GlobalStyles from "@/styles/GlobalStyles";
import InfoModal from "@/components/common/InfoModal";
import ContentContainer from "@/components/common/ContentContainer";
import Sidebar from "@/components/common/Sidebar";

export const metadata: Metadata = {
  title: "CALLO - 제로 칼로리 쇼핑몰",
  description: "제로 칼로리, 제로 슈가 등 다양한 카테고리를 통한 제로 식품들을 만나보세요!",
  keywords: "제로 칼로리, 제로 슈가, 다이어트 식품, 칼로",
  openGraph: {
    title: "CALLO - 제로 칼로리 쇼핑몰",
    description: "제로 칼로리, 제로 슈가 등 다양한 카테고리를 통한 제로 식품들을 만나보세요!",
    url: "https://example.com", // 실제 URL로 변경
    images: [
      {
        url: "/public/img/로고 배너1.png", 
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <GlobalStyles />
        <StyledComponentsRegistry>
          <AppRouterCacheProvider>
            <ThemeRegistry>
              <InfoModal />
              <Sidebar/>
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
