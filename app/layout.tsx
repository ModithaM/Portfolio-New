import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeContextProvider from "@/context/theme-context";
import "./globals.css";
import { Dock } from "@/components/dock";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moditha Marasingha",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-2xl mx-auto bg-gray-50 text-gray-950 relative pt-6 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          {children}
          <Dock/>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
