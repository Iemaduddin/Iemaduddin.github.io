import type { Metadata } from "next";
import "./styles/globals.css";
import React from "react";
import Providers from "./components/Providers";

export const metadata: Metadata = {
  title: "Portfolio - Iemaduddin",
  description: "Personal portfolio Iemaduddin",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
