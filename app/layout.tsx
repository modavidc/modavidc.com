import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LangProvider } from "@/lib/lang"
import { FxMount } from "@/components/fx-mount"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  title: {
    default: "Moisés Cedeño · Tech Lead & Consultor",
    template: "%s · Moisés Cedeño",
  },
  description: "Arquitecto de soluciones y Tech Lead. FinOps: -58% en factura AWS, -$20K/año en licencias. Healthcare, SaaS y agentes de IA en producción.",
  authors: [{ name: "Moisés Cedeño" }],
  creator: "Moisés Cedeño",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://modavidc.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://modavidc.com",
    title: "Moisés Cedeño · Tech Lead & Consultor",
    description: "Arquitecto de soluciones y Tech Lead. FinOps: -58% en factura AWS, -$20K/año en licencias.",
    siteName: "modavidc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moisés Cedeño · Tech Lead & Consultor",
    description: "Arquitecto de soluciones y Tech Lead. FinOps: -58% en factura AWS, -$20K/año en licencias.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://modavidc.com/#person",
        name: "Moisés Cedeño",
        url: "https://modavidc.com/about",
        image: "https://modavidc.com/assets/profile/moises.webp",
        jobTitle: "Tech Lead y arquitecto de soluciones",
        sameAs: ["https://www.linkedin.com/in/modavidc/", "https://github.com/modavidc"],
      },
      {
        "@type": "WebSite",
        "@id": "https://modavidc.com/#website",
        name: "Moisés Cedeño",
        url: "https://modavidc.com/",
        inLanguage: ["es", "en"],
        publisher: { "@id": "https://modavidc.com/#person" },
      },
    ],
  }

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <link rel="preload" href="/fonts/schibsted-grotesk-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem storageKey="modavidc-theme">
          <LangProvider>
            {children}
            <FxMount />
          </LangProvider>
        </ThemeProvider>
        {GA_ID && process.env.NODE_ENV === "production" && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
