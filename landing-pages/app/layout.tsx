import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

