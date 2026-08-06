import type { Metadata, Viewport } from "next";
import { site, socials, contact, hero } from "@/data/portfolio";
import { CustomCursor } from "@/components/CustomCursor";
import { PageLoader } from "@/components/PageLoader";
import { ScrollProgress } from "@/components/Reveal";
import "./globals.css";

const siteUrl = site.url;

export const viewport: Viewport = {
  themeColor: "#ff2a2a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.metaTitle,
    template: `%s | ${site.fullName}`,
  },
  description: site.metaDescription,
  keywords: site.keywords,
  authors: [{ name: site.fullName, url: siteUrl }],
  creator: site.fullName,
  publisher: site.fullName,
  applicationName: `${site.fullName} Portfolio`,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.fullName,
    title: site.metaTitle,
    description: site.metaDescription,
    images: [
      {
        url: hero.portrait,
        width: 1200,
        height: 630,
        alt: `${site.fullName} — Creative Full-Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.metaDescription,
    images: [hero.portrait],
    creator: "@praveenwijewardana",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/assets/fav1.png", type: "image/png" }],
    apple: [{ url: "/assets/fav1.png" }],
    shortcut: "/assets/fav1.png",
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  url: siteUrl,
  image: `${siteUrl}${hero.portrait}`,
  jobTitle: hero.role,
  description: site.metaDescription,
  email: contact.email,
  telephone: contact.phone,
  sameAs: socials.map((s) => s.href),
  knowsAbout: site.keywords,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <PageLoader />
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
