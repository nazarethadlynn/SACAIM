// src/app/layout.tsx
import './globals.css'
import type { ReactNode } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'ICAIH Conference',
  description: 'International Conference on Artificial Intelligence in Health Care',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
