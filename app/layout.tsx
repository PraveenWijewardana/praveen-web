import type { Metadata, Viewport } from "next";
import { site, socials, contact, hero } from "@/data/portfolio";
import { CustomCursor } from "@/components/CustomCursor";
import { PageLoader } from "@/components/PageLoader";
import { ScrollProgress } from "@/components/Reveal";
import "./globals.css";

const siteUrl = site.url;
const ogImageUrl = `${siteUrl}${hero.ogImage}`;
const portraitUrl = `${siteUrl}${hero.portrait}`;
const title = site.metaTitle;
const description = site.metaDescription;

export const viewport: Viewport = {
  themeColor: "#ff2a2a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${site.fullName}`,
  },
  description,
  keywords: site.keywords,
  authors: [{ name: site.fullName, url: siteUrl }],
  creator: site.fullName,
  publisher: site.fullName,
  applicationName: `${site.fullName} — Software Engineer Portfolio`,
  category: "technology",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: site.fullName,
    title,
    description,
    firstName: site.givenName,
    lastName: site.familyName,
    username: "praveenwijewardana",
    images: [
      {
        url: hero.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.fullName} — Software Engineer (SE) & Full-Stack Developer`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@praveenwijewardana",
    images: [hero.ogImage],
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
    icon: [
      { url: "/assets/brand-mark.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "64x64" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "profile:first_name": site.givenName,
    "profile:last_name": site.familyName,
    "profile:username": "praveenwijewardana",
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${site.fullName} Portfolio`,
      alternateName: site.alternateNames,
      description,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: title,
      description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      primaryImageOfPage: { "@id": `${siteUrl}/#og-image` },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: site.fullName,
      givenName: site.givenName,
      familyName: site.familyName,
      alternateName: site.alternateNames,
      url: siteUrl,
      image: [
        {
          "@type": "ImageObject",
          "@id": `${siteUrl}/#og-image`,
          url: ogImageUrl,
          contentUrl: ogImageUrl,
          width: 1200,
          height: 630,
          caption: `${site.fullName} — Software Engineer (SE) & Full-Stack Developer`,
          name: `${site.fullName} Open Graph portrait`,
          encodingFormat: "image/jpeg",
        },
        {
          "@type": "ImageObject",
          "@id": `${siteUrl}/#portrait`,
          url: portraitUrl,
          contentUrl: portraitUrl,
          caption: `${site.fullName} — Software Engineer`,
          name: site.fullName,
          encodingFormat: "image/png",
        },
      ],
      jobTitle: [
        "Software Engineer",
        "Software Engineer (SE)",
        "Full-Stack Developer",
        "SE Intern",
      ],
      description,
      email: contact.email,
      telephone: contact.phone,
      sameAs: socials.map((s) => s.href),
      knowsAbout: [
        "Software Engineering",
        "Full-Stack Development",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Web Development",
        "AI-powered development",
      ],
      worksFor: {
        "@type": "Organization",
        name: "DaleX Consultancy",
      },
      nationality: {
        "@type": "Country",
        name: "Sri Lanka",
      },
      mainEntityOfPage: { "@id": `${siteUrl}/#profilepage` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
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
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <PageLoader />
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
