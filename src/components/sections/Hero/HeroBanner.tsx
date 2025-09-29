// src/components/sections/Hero/HeroBanner.tsx
const HeroBanner = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Rich overlay for better text visibility */}
      <div className="hero-overlay" />
      
      {/* Hero content - combines both approaches */}
      <div className="relative z-20 hero-content center-content">
        {/* ICAIH Logo/Icon - REMOVED STAR, SIMPLE DESIGN */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 bg-opacity-20 rounded-full mb-6 border-2 border-green-400">
          <div className="text-green-400 text-3xl font-bold">I</div>
        </div>
        
        <h1>
          INTERNATIONAL CONFERENCE ON
          <br />
          <span className="text-blue-300">ARTIFICIAL INTELLIGENCE</span>
          <br />
          <span className="text-blue-300">IN HEALTH CARE</span>
        </h1>
        
        <h2>(ICAIH-2025)</h2>
        
        <h3>
          ST ALOYSIUS (DEEMED TO BE UNIVERSITY)
          <br />
          INSTITUTE OF MANAGEMENT AND IT
        </h3>
        
        <p>20TH & 21ST, MARCH, 2025</p>
        
        {/* Enhanced Springer Logo */}
        <div className="springer-logo">
          <div className="springer-text">
            📚 Springer
            <span className="ccis-badge">CCIS</span>
          </div>
          <div className="issn-text">
            Springer CCIS Series | ISSN No. : 1865-0929
          </div>
        </div>
        
        {/* Call-to-Action Buttons */}
        <div className="cta-buttons">
          <button className="btn-primary">
            Register Now
          </button>
          <button className="btn-secondary">
            Download Brochure
          </button>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
