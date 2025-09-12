import type { Metadata } from 'next'
import { Albert_Sans } from 'next/font/google'
import './globals.css'

const albertSans = Albert_Sans({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Cradle',
  description: 'Modern data infrastructure for real-world operations',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={albertSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
