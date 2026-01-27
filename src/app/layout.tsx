import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "../output.css";
import { PostHogProvider } from '../components/PostHogProvider'
import { OrganizationSchema, SoftwareApplicationSchema } from '../components/structured-data'


const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'Cradle - Modern Data Infrastructure for Marinas',
    template: '%s | Cradle'
  },
  description: 'Transform your marina operations with real-time business intelligence, AI-powered dry storage optimization, and automated customer communications. Save 20+ hours per week and increase revenue by 30%.',
  keywords: ['marina management software', 'marina data analytics', 'dry storage optimization', 'marina business intelligence', 'marina automation', 'boat storage optimization', 'marina reporting software'],
  authors: [{ name: 'Cradle Labs' }],
  openGraph: {
    title: 'Cradle - Modern Data Infrastructure for Marinas',
    description: 'Real-time business intelligence and AI-powered optimization for marina operators',
    url: 'https://usecradle.com',
    siteName: 'Cradle',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cradle - Modern Data Infrastructure for Marinas',
    description: 'Real-time business intelligence and AI-powered optimization for marina operators',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <OrganizationSchema />
        <SoftwareApplicationSchema />
      </head>
      <body className="font-sans">
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  )
}