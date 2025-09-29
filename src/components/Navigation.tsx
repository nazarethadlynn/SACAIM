'use client'

import { useState, useEffect } from 'react'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string, index: number) => {
    setActiveIndex(index)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Keynote Speakers', id: 'speakers' },
    { label: 'Important Dates', id: 'dates' },
    { label: 'Contact', id: 'contact' }
  ]

  return (
    <nav className={`creative-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        
        {/* Creative Logo/Brand on Left */}
        <div className="nav-brand">
          <div className="logo-circle">
            <span className="logo-text">ICAIH</span>
          </div>
          <div className="brand-info">
            <div className="brand-title">AI Healthcare 2025</div>
            <div className="brand-subtitle">March 20-21</div>
          </div>
        </div>

        {/* Creative Navigation Items on Right */}
        <div className="nav-items">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id, index)}
              className={`nav-item ${activeIndex === index ? 'active' : ''}`}
            >
              <span className="nav-label">{item.label}</span>
              <div className="nav-glow"></div>
            </button>
          ))}
          
          {/* Special For Authors Button */}
          <button 
            onClick={() => scrollToSection('authors', 5)}
            className="for-authors-special"
          >
            <span className="authors-text">For Authors</span>
            <div className="authors-pulse"></div>
          </button>
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
