// src/components/Navigation.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="site-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo (left) - ONLY CHANGED THE SVG TO SIMPLE TEXT */}
        <div className="flex items-center gap-3">
          <Link href="/" className="logo-link">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <div className="w-10 h-6 bg-green-600 rounded-sm flex items-center justify-center">
                  {/* SIMPLE "I" INSTEAD OF STAR SVG */}
                  <span className="text-white font-bold text-lg">I</span>
                </div>
              </div>
              <span className="ml-3 text-white font-bold text-lg">ICAIH</span>
            </div>
          </Link>
        </div>

        {/* Center nav links (desktop) - KEPT EXACTLY AS YOU HAD */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <Link href="/" className="nav-link active">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/keynote-speakers" className="nav-link">Keynote Speakers</Link>
          <Link href="/important-dates" className="nav-link">Important Dates</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <div className="relative">
            <button className="nav-link">Committees ▾</button>
            {/* Dropdown placeholder - implement if needed */}
          </div>
        </div>

        {/* CTA (right) - KEPT EXACTLY AS YOU HAD */}
        <div className="hidden md:block">
          <Link href="/for-authors" className="cta-btn">For Authors</Link>
        </div>

        {/* Mobile button - KEPT YOUR ORIGINAL SVG */}
        <div className="md:hidden">
          <button onClick={() => setOpen(p => !p)} aria-label="Toggle menu" className="p-2">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - KEPT EXACTLY AS YOU HAD */}
      {open && (
        <div className="md:hidden mobile-menu">
          <div className="px-4 pb-4 space-y-2">
            <Link href="/" className="mobile-link">Home</Link>
            <Link href="/about" className="mobile-link">About</Link>
            <Link href="/keynote-speakers" className="mobile-link">Keynote Speakers</Link>
            <Link href="/important-dates" className="mobile-link">Important Dates</Link>
            <Link href="/contact" className="mobile-link">Contact</Link>
            <Link href="/for-authors" className="mobile-cta">For Authors</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
