import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "../utils/fonts";
import Sidebar from "@/components/layout/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/common/ThemeProvider";

export const metadata: Metadata = {
  title: "Web game",
  description: "Trang web hàng đầu về các loại game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${manrope.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
