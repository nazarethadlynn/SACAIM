// src/components/Navigation.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string, index: number) => {
    setActiveIndex(index)
    
    // If we're on home page, scroll to section
    if (pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const navItems = [
    { label: 'Home', id: 'home', href: '/' },
    { label: 'About', id: 'about', href: '/about' },
    { label: 'Keynote Speakers', id: 'speakers', href: '/keynote-speakers' },
    { label: 'Important Dates', id: 'dates', href: '/important-dates' },
    { label: 'Contact', id: 'contact', href: '/contact' }
  ]

  return (
    <nav className={`creative-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        
        {/* Creative Logo/Brand on Left */}
        <div className="nav-brand">
          <Link href="/">
            <div className="logo-circle">
              <span className="logo-text">SACAIM</span>
            </div>
          </Link>
          <div className="brand-info">
            <div className="brand-title">SACAIM</div>
            <div className="brand-subtitle">October 30-31</div>
          </div>
        </div>

        {/* Creative Navigation Items on Right */}
        <div className="nav-items">
          {navItems.map((item, index) => (
            // Use Link for page navigation, button for home page scrolling
            pathname === '/' && item.href === '/' ? (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id, index)}
                className={`nav-item-clean ${activeIndex === index ? 'active' : ''}`}
              >
                <span className="nav-label">{item.label}</span>
                <div className="nav-glow"></div>
              </button>
            ) : (
              <Link
                key={item.id}
                href={item.href}
                className={`nav-item-clean ${pathname === item.href ? 'active' : ''}`}
              >
                <span className="nav-label">{item.label}</span>
                <div className="nav-glow"></div>
              </Link>
            )
          ))}
          
          {/* Special For Authors Button */}
          <Link
            href="/for-authors"
            className="for-authors-special"
          >
            <span className="authors-text">For Authors</span>
          </Link>
        </div>

        {/* Creative Background Elements */}
        <div className="nav-bg-elements">
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-3"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
