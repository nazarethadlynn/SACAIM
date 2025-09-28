'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo - EXACT match */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
            </div>
            <div className="text-white font-bold text-xl">ICAIH</div>
          </div>

          {/* Desktop Menu - EXACT match */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-200 font-medium">Home</Link>
            <Link href="/about" className="text-white hover:text-blue-200 font-medium">About</Link>
            <Link href="/speakers" className="text-white hover:text-blue-200 font-medium">Speakers</Link>
            <Link href="/schedule" className="text-white hover:text-blue-200 font-medium">Schedule</Link>
            <Link href="/registration" className="text-white hover:text-blue-200 font-medium">Registration</Link>
            <Link href="/contact" className="text-white hover:text-blue-200 font-medium">Contact</Link>
          </div>

          {/* For Authors Button - EXACT match */}
          <div className="hidden md:block">
            <Link href="/authors" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded font-semibold">
              For Authors
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur rounded-lg p-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-white font-medium">Home</Link>
              <Link href="/about" className="text-white font-medium">About</Link>
              <Link href="/speakers" className="text-white font-medium">Speakers</Link>
              <Link href="/schedule" className="text-white font-medium">Schedule</Link>
              <Link href="/registration" className="text-white font-medium">Registration</Link>
              <Link href="/contact" className="text-white font-medium">Contact</Link>
              <Link href="/authors" className="bg-blue-700 text-white px-4 py-2 rounded font-semibold text-center">
                For Authors
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
