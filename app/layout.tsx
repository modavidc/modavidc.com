import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChatBot } from "@/components/chat-bot"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  title: {
    default: "modavidc — Moisés Cedeño · Solutions Architect",
    template: "%s | modavidc"
  },
  description: "Solutions Architect con +8 años en Healthcare, SaaS e IoT. FinOps: -58% AWS, -$20k/año en licencias. Arquitecturas que escalan sin depender de quién las creó.",
  keywords: [
    "Solutions Architect",
    "FinOps",
    "Cloud Optimization",
    "AWS Cost Optimization",
    "Healthcare Technology",
    "SaaS Architecture",
    "FHIR R4",
    "Backend Engineer",
    "AWS",
    "Healthcare",
    "SaaS",
    "IoT",
  ],
  authors: [{ name: "Moisés Cedeño" }],
  creator: "Moisés Cedeño",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://modavidc.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://modavidc.com",
    title: "modavidc — Moisés Cedeño · Solutions Architect",
    description: "Solutions Architect con +8 años en Healthcare, SaaS e IoT. Arquitecturas que escalan sin depender de quién las creó.",
    siteName: "modavidc",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "modavidc — Moisés Cedeño · Solutions Architect",
    description: "Solutions Architect con +8 años en Healthcare, SaaS e IoT.",
    creator: "@modavidc",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <ChatBot />
        </ThemeProvider>
        {GA_ID && process.env.NODE_ENV === "production" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
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
