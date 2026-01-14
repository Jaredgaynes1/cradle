import type { Metadata } from 'next'
import { Odor_Mean_Chey } from 'next/font/google'
import "../output.css";
import { PostHogProvider } from '../components/PostHogProvider'

const odorMeanChey = Odor_Mean_Chey({
  subsets: ['latin'],
  weight: '400',
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
    <html lang="en" className={odorMeanChey.variable}>
      <body className="font-sans">
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  )
}