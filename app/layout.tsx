import type { Metadata } from "next";
import { site } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
  icons: {
    icon: "/assets/fav1.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
