import type { Metadata } from 'next'
import Script from 'next/script'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer' 
import { SpeedInsights } from "@vercel/speed-insights/next"

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
  preload: true,
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sashido.io'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AI Coding Agents - Deploy & Scale with SashiDo',
    template: '%s | SashiDo',
  },
  description: 'Deploy your AI coding agents with confidence. One-click deployment, expert support, EU infrastructure. Start your 14-day free trial today.',
  keywords: ['AI coding agents', 'deployment', 'hosting', 'Parse Server', 'SashiDo', 'cloud infrastructure', 'backend as a service', 'BaaS', 'Lovable', 'Replit', 'v0.dev', 'Cursor'],
  authors: [{ name: 'SashiDo' }],
  creator: 'SashiDo',
  publisher: 'SashiDo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'SashiDo',
    title: 'AI Coding Agents - Deploy & Scale with SashiDo',
    description: 'Deploy your AI coding agents with confidence. One-click deployment, expert support, EU infrastructure. Start your 14-day free trial today.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SashiDo - AI Coding Agents Deployment Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Coding Agents - Deploy & Scale with SashiDo',
    description: 'Deploy your AI coding agents with confidence. One-click deployment, expert support, EU infrastructure.',
    creator: '@SashiDo',
    images: ['/images/og-image.png'],
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
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  category: 'technology',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': '#5B4FFF',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Support both NEXT_PUBLIC_GA_MEASUREMENT_ID (recommended) and GA_MEASUREMENT_ID
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.GA_MEASUREMENT_ID

  return (
    <html lang="en" className={ubuntu.variable}>
      <body className={ubuntu.className}>
      <SpeedInsights/>
        <Script
          id="structured-data-software"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'SashiDo',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Cloud',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                description: '14-day free trial, no credit card required',
              },
              description: 'Deploy your AI coding agents with confidence. One-click deployment, expert support, EU infrastructure.',
              url: siteUrl,
              provider: {
                '@type': 'Organization',
                name: 'SashiDo',
                url: siteUrl,
              },
              featureList: [
                'One-click deployment',
                'Parse Server hosting',
                'European data centers',
                'GDPR-compliant',
                'MongoDB included',
                'S3 storage included',
              ],
            }),
          }}
        />
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SashiDo',
              url: siteUrl,
              logo: `${siteUrl}/icon.png`,
              description: 'Backend platform for AI coding agents. Deploy with confidence.',
              sameAs: [
                'https://twitter.com/SashiDo',
                'https://www.linkedin.com/company/sashido',
              ],
            }),
          }}
        />
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        {children}
        <Footer />
      </body>
    </html>
  )
}

