import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ICAIH 2025 - International Conference on Artificial Intelligence in Healthcare',
  description: 'Join us for ICAIH 2025 at St Aloysius (Deemed to be University) Institute of Management and IT, focusing on advanced AI technologies in healthcare.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
