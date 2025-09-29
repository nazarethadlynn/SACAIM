<<<<<<< HEAD
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
=======
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
>>>>>>> 3cf549e27ab34f05064e660f46240743b6845aec

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'ICAIH 2025 - International Conference on AI in Healthcare',
  description: 'St. Aloysius Institute Conference',
=======
  title: 'SACAIM 2025 - AI Healthcare Conference',
  description: 'International Conference on Artificial Intelligence in Health Care',
>>>>>>> 3cf549e27ab34f05064e660f46240743b6845aec
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={`${inter.className} fixed-background-layout`}>
        {children}
        <Footer />
=======
      <body className={inter.className}>
        {/* Navigation will show on ALL pages */}
        <Navigation />
        
        {/* Page content */}
        {children}
>>>>>>> 3cf549e27ab34f05064e660f46240743b6845aec
      </body>
    </html>
  )
}
