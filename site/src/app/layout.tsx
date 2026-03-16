import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sayantan Chatterjee",
  description:
    "Customer Success Leader & AI Builder. Building products that solve real problems.",
  metadataBase: new URL("https://sayantan.site"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Sayantan Chatterjee",
    description:
      "Customer Success Leader & AI Builder. Building products that solve real problems.",
    url: "https://sayantan.site",
    siteName: "Sayantan Chatterjee",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sayantan Chatterjee — Customer Success Leader & AI Builder",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayantan Chatterjee",
    description:
      "Customer Success Leader & AI Builder. Building products that solve real problems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Script to prevent flash of wrong theme on load
const themeScript = `
  (function() {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
