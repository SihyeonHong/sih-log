import type { Metadata } from "next";

import "@/styles/globals.css";
import ThemeProvider from "@/provider/ThemeProvider";

export const metadata: Metadata = {
  title: "sih.log",
  description: "개발자 홍시현의 기록",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="leading-relaxed antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
