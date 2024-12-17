import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import AppBar from "@/components/common/AppBar";
import Header from "@/components/common/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeRegistry from "@/components/common/ThemeRegistry";
import GlobalStyles from "@/styles/GlobalStyles";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
              <Header />
              {children}
              <AppBar />
            </ThemeRegistry>
          </AppRouterCacheProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
