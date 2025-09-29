'use client'

import { useEffect, useState } from 'react'

const HeroBanner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Interactive background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Parallax overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50 transition-all duration-1000"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />
      
      {/* Hero content with staggered animations */}
      <div className={`relative z-20 hero-content center-content transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Enhanced ICAIH Logo */}
        <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400/30 to-blue-400/30 rounded-full mb-6 border-2 border-green-400 backdrop-blur-sm transition-all duration-700 hover:scale-110 hover:rotate-12 ${isVisible ? 'scale-100' : 'scale-0'}`}>
          <div className="text-green-400 text-3xl font-bold animate-pulse">I</div>
        </div>
        
        {/* Animated title with typewriter effect */}
        <h1 className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <span className="inline-block hover:scale-105 transition-transform duration-300">INTERNATIONAL</span>{' '}
          <span className="inline-block hover:scale-105 transition-transform duration-300">CONFERENCE</span>{' '}
          <span className="inline-block hover:scale-105 transition-transform duration-300">ON</span>
          <br />
          <span className="text-blue-300 hover:text-blue-200 transition-colors duration-300">
            <span className="inline-block hover:scale-105 transition-transform duration-300">ARTIFICIAL</span>{' '}
            <span className="inline-block hover:scale-105 transition-transform duration-300">INTELLIGENCE</span>
          </span>
          <br />
          <span className="text-blue-300 hover:text-blue-200 transition-colors duration-300">
            <span className="inline-block hover:scale-105 transition-transform duration-300">IN</span>{' '}
            <span className="inline-block hover:scale-105 transition-transform duration-300">HEALTH</span>{' '}
            <span className="inline-block hover:scale-105 transition-transform duration-300">CARE</span>
          </span>
        </h1>
        
        <h2 className={`transition-all duration-1000 delay-500 hover:scale-110 cursor-default ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          (ICAIH-2025)
        </h2>
        
        <h3 className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <span className="inline-block hover:text-blue-200 transition-colors duration-300">ST ALOYSIUS (DEEMED TO BE UNIVERSITY)</span>
          <br />
          <span className="inline-block hover:text-blue-200 transition-colors duration-300">INSTITUTE OF MANAGEMENT AND IT</span>
        </h3>
        
        <p className={`transition-all duration-1000 delay-900 text-green-400 hover:text-green-300 cursor-default ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          20TH & 21ST, MARCH, 2025
        </p>
        
        {/* Enhanced Springer Logo with hover effects */}
        <div className={`springer-logo group hover:scale-105 hover:rotate-1 cursor-pointer transition-all duration-500 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <div className="springer-text">
            <span className="group-hover:scale-110 transition-transform duration-300">📚</span> Springer
            <span className="ccis-badge group-hover:bg-orange-600 transition-colors duration-300">CCIS</span>
          </div>
          <div className="issn-text group-hover:text-gray-600 transition-colors duration-300">
            Springer CCIS Series | ISSN No. : 1865-0929
          </div>
        </div>
        
        {/* Enhanced Call-to-Action Buttons */}
        <div className={`cta-buttons transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <button className="btn-primary group relative overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Register Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button className="btn-secondary group relative overflow-hidden">
            <span className="relative z-10">Download Brochure</span>
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="scroll-indicator">
        <button 
          onClick={scrollToNext}
          className="scroll-arrow group hover:scale-125 transition-all duration-300"
        >
          <div className="w-12 h-12 border-2 border-white/60 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24" className="group-hover:translate-y-1 transition-transform duration-300">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
        </button>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-green-400/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-blue-400/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce"></div>
    </div>
  )
}

export default HeroBanner
