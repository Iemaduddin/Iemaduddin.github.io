import type { Metadata } from "next";
import "./styles/globals.css";
import React from "react";
import Providers from "./components/Providers";

const siteUrl = "https://iemaduddin.github.io/portofolio";
const siteName = "Iemaduddin - Full Stack Web Developer Portfolio";
const defaultDescription =
  "Iemaduddin (Didin) — Full Stack Web Developer with 2+ years of experience in Laravel, Next.js, React, TypeScript, and modern web technologies. Explore portfolio projects, experience, and skills.";
const author = "Iemaduddin";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  authors: [{ name: author, url: siteUrl }],
  keywords: [
    "Iemaduddin",
    "Didin",
    "Full Stack Developer",
    "Web Developer",
    "Portfolio",
    "Laravel",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "PHP",
    "Node.js",
    "Politeknik Negeri Malang",
    "Freelance Developer",
    "Web Development Indonesia",
  ],
  creator: author,
  publisher: author,
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    url: siteUrl,
    siteName: "Iemaduddin Portfolio",
    title: siteName,
    description: defaultDescription,
    images: [
      {
        url: "/_foto_didin.png",
        width: 800,
        height: 800,
        alt: "Iemaduddin - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
    images: ["/_foto_didin.png"],
    creator: "@iemaduddin",
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
    icon: "/icon.ico",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Iemaduddin",
  alternateName: "Didin",
  givenName: "Iemaduddin",
  jobTitle: "Full Stack Web Developer",
  description:
    "Full Stack Web Developer with over 2 years of experience building modern web applications using Laravel, Next.js, React, TypeScript, and various database technologies.",
  url: siteUrl,
  sameAs: [
    "https://github.com/Iemaduddin",
    "https://linkedin.com/in/iemaduddin",
  ],
  image: `${siteUrl}/_foto_didin.png`,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "State Polytechnic of Malang",
  },
  knowsAbout: [
    "Full Stack Development",
    "Laravel",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "PHP",
    "Node.js",
    "Python",
    "MySQL",
    "PostgreSQL",
    "Tailwind CSS",
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
  author: {
    "@type": "Person",
    name: author,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
