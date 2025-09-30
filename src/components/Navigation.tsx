'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Keynote Speakers', id: 'keynote-speakers' }, // Changed id to 'keynote-speakers' to match previous ID discussion
  { label: 'Important Dates', id: 'important-dates' },   // Changed id to 'important-dates'
  { label: 'Contact', id: 'contact' }
]

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  // Track window scroll to toggle 'scrolled' class
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active nav item based on scroll position
      let currentActive = 0
      navItems.forEach((item, index) => {
        const element = document.getElementById(item.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) currentActive = index
        }
      })

      setActiveIndex(currentActive)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll smooth to section and set active menu
  const scrollToSection = (sectionId: string, index: number) => {
    setActiveIndex(index)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Special "For Authors" button scroll handler
  const scrollToAuthors = () => {
    setActiveIndex(navItems.length) // Index beyond regular items
    const element = document.getElementById('for-authors')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`creative-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">

        {/* Logo / Brand */}
        <div className="nav-brand">
          <div className="logo-circle">
            <span className="logo-text">SACAIM</span>
          </div>
          <div className="brand-info">
            <div className="brand-title">SACAIM</div>
            <div className="brand-subtitle">October 30-31</div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="nav-items">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id, index)}
              className={`nav-item-clean ${activeIndex === index ? 'active' : ''}`}
              type="button"
            >
              <span className="nav-label">{item.label}</span>
              <div className="nav-glow"></div>
            </button>
          ))}

          {/* For Authors Special Button */}
          <button
            onClick={scrollToAuthors}
            className={`for-authors-special ${activeIndex === navItems.length ? 'active' : ''}`}
            type="button"
          >
            <span className="authors-text">For Authors</span>
          </button>
        </div>

        {/* Background Elements */}
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
