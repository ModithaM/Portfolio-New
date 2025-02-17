import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeContextProvider from "@/context/theme-context";
import "./globals.css";
import { Dock } from "@/components/dock";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moditha Marasingha",
  description: "Explore the portfolio of Moditha Marasingha, a passionate Software Engineering undergraduate specializing in backend development, web solutions, and IoT projects. Showcasing expertise in Java, Spring Boot, React, MongoDB, and more.",
  openGraph: {
    title: "Moditha Marasingha",
    description: "Explore the portfolio of Moditha Marasingha, a passionate Software Engineering undergraduate specializing in backend development, web solutions, and IoT projects. Showcasing expertise in Java, Spring Boot, React, MongoDB, and more.",
    url: "https://www.moditha.me/",
    type: "website",
    images: [
      {
        url: "/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Portfolio Banner",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-2xl mx-auto bg-gray-50 text-gray-950 relative pt-3 sm:pt-16 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 scroll-smooth`}
      >
        <ThemeContextProvider>
          {children}
          <Dock/>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
