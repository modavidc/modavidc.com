import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Moisés Cedeño - Arquitecto de Rescate | Ingeniería de la Razón",
    template: "%s | Moisés Cedeño"
  },
  description: "Arquitecto de Rescate. Liderando la Ingeniería de la Razón. La IA acelera la deuda técnica. Mi foco es la arquitectura por propósito para convertir sistemas Legacy en ventaja competitiva. Creador de MC-DC.",
  keywords: [
    "Arquitecto de Rescate",
    "Ingeniería de la Razón",
    "Arquitectura por Propósito",
    "Deuda Técnica",
    "Sistemas Legacy",
    "Tech Lead",
    "API Architecture",
    "Modernización de Sistemas",
    "ROI Tecnológico",
    "Filosofía de Arquitectura",
    "MC-DC",
    "Cloud Infrastructure",
    "AWS Optimization"
  ],
  authors: [{ name: "Moisés Cedeño" }],
  creator: "Moisés Cedeño",
  publisher: "Moisés Cedeño",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://moises.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://moises.dev',
    title: 'Moisés Cedeño - Arquitecto de Rescate | Ingeniería de la Razón',
    description: 'Arquitecto de Rescate. Liderando la Ingeniería de la Razón. Arquitectura por propósito para convertir sistemas Legacy en ventaja competitiva. Creador de MC-DC.',
    siteName: 'Moisés Cedeño Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Moisés Cedeño - Arquitecto de Rescate | Ingeniería de la Razón',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moisés Cedeño - Arquitecto de Rescate | Ingeniería de la Razón',
    description: 'Arquitecto de Rescate. Liderando la Ingeniería de la Razón. Arquitectura por propósito para convertir sistemas Legacy en ventaja competitiva.',
    images: ['/og-image.jpg'],
    creator: '@modavidc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}