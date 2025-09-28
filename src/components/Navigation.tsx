// src/components/Navigation.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <div className="text-green-600 font-bold text-2xl">ICAIH</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="#speakers" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Keynote Speakers
            </Link>
            <Link href="#dates" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Important Dates
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
            <Link href="#committees" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Committees
            </Link>
          </div>

          {/* For Authors Button */}
          <div className="hidden md:block">
            <Link 
              href="#authors" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              For Authors
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-3">
              <Link href="#home" className="text-gray-700 font-medium py-2">Home</Link>
              <Link href="#about" className="text-gray-700 font-medium py-2">About</Link>
              <Link href="#speakers" className="text-gray-700 font-medium py-2">Keynote Speakers</Link>
              <Link href="#dates" className="text-gray-700 font-medium py-2">Important Dates</Link>
              <Link href="#contact" className="text-gray-700 font-medium py-2">Contact</Link>
              <Link href="#committees" className="text-gray-700 font-medium py-2">Committees</Link>
              <Link href="#authors" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg text-center">
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
