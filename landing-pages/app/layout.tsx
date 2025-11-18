import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer' 

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
})

export const metadata: Metadata = {
  title: 'AI Coding Agents - Deploy & Scale with SashiDo',
  description: 'Deploy your AI coding agents with confidence. One-click deployment, expert support, EU infrastructure. Start your 14-day free trial today.',
  keywords: ['AI coding agents', 'deployment', 'hosting', 'Parse Server', 'SashiDo', 'cloud infrastructure'],
  authors: [{ name: 'SashiDo' }],
  openGraph: {
    title: 'AI Coding Agents - Deploy & Scale with SashiDo',
    description: 'Deploy your AI coding agents with confidence. One-click deployment, expert support, EU infrastructure.',
    type: 'website',
    locale: 'en_US',
    siteName: 'SashiDo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Coding Agents - Deploy & Scale with SashiDo',
    description: 'Deploy your AI coding agents with confidence. One-click deployment, expert support, EU infrastructure.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body className={ubuntu.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}

