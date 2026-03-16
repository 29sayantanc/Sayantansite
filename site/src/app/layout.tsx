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
    "Customer Success Leader & AI Builder with over 9 years of experience driving enterprise revenue. Evenings, I build AI-powered products that solve real-world problems.",
  metadataBase: new URL("https://sayantan.site"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Sayantan Chatterjee",
    description:
      "Customer Success Leader & AI Builder with over 9 years of experience driving enterprise revenue. Evenings, I build AI-powered products that solve real-world problems.",
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
      "Customer Success Leader & AI Builder with over 9 years of experience driving enterprise revenue. Evenings, I build AI-powered products that solve real-world problems.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sayantan Chatterjee",
              url: "https://sayantan.site",
              jobTitle: "Customer Success Leader & AI Builder",
              description:
                "Customer Success Leader with over 9 years of experience driving revenue. AI product builder.",
              image: "https://sayantan.site/me.jpeg",
              sameAs: [
                "https://www.linkedin.com/in/sayantan-chatterjee-05a8a5a3/",
                "https://github.com/29sayantanc",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
