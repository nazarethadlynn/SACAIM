// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'ICAIH 2025 - International Conference on Artificial Intelligence in Health Care',
  description: 'International Conference on Artificial Intelligence in Health Care at St Aloysius Institute',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <div className="main-container">
          {children}
        </div>
      </body>
    </html>
  )
}
