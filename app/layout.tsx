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
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,400,0..1,0&icon_names=arrow_downward,arrow_forward,check,check_circle,cloud,co_present,dark_mode,description,format_quote,groups,hub,light_mode,location_on,mail,north_east,person,smart_toy,touch_app,trending_down&display=block"
        />
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
