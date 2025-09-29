import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SACAIM 2025 - AI Healthcare Conference',
  description: 'International Conference on Artificial Intelligence in Health Care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation will show on ALL pages */}
        <Navigation />
        
        {/* Page content */}
        {children}
      </body>
    </html>
  )
}
