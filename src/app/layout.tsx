// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ICAIH 2025 - International Conference on AI in Healthcare',
  description: 'St. Aloysius Institute Conference',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} fixed-background-layout`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
