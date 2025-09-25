'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Keynote Speakers', href: '/keynote-speakers' },
  { name: 'Important Dates', href: '/important-dates' },
  { name: 'Contact', href: '/contact' },
  { name: 'Committees', href: '/committees' },
  { name: 'For Authors', href: '/for-authors' },
]

const Navigation = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-white hover:text-blue-200 transition-colors font-medium"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
