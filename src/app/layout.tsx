import type { Metadata } from 'next'
import { Petrona } from 'next/font/google'
import "../output.css";
import { PostHogProvider } from '../components/PostHogProvider'


const petrona = Petrona({
  subsets: ['latin'],
  weight: ['400', '700'],
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
    <html lang="en" className={`${petrona.variable}`}>
      <body className="font-sans">
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  )
}