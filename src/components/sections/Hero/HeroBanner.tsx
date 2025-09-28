// src/components/sections/Hero/HeroBanner.tsx
const HeroBanner = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
      
      {/* Content with centered styling */}
      <div className="relative z-20 center-content">
        {/* ICAIH Logo/Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 bg-opacity-20 rounded-full mb-6 border-2 border-green-400">
          <div className="text-green-400 text-3xl font-bold">I</div>
        </div>
        
        <h1>
          INTERNATIONAL CONFERENCE ON
          <br />
          <span className="text-blue-300">ARTIFICIAL INTELLIGENCE</span>
          <br />
          <span className="text-blue-200">IN HEALTH CARE</span>
        </h1>
        
        <h2>(ICAIH-2025)</h2>
        
        <h3>
          ST ALOYSIUS (DEEMED TO BE UNIVERSITY)
          <br />
          INSTITUTE OF MANAGEMENT AND IT
        </h3>
        
        <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#10b981', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
          20TH & 21ST, MARCH, 2025
        </p>
        
        {/* Enhanced Springer Logo */}
        <div className="springer-logo" style={{ background: 'white', color: '#1f2937' }}>
          <div className="springer-text">
            📚 Springer
            <span className="ccis-badge">CCIS</span>
          </div>
          <div className="issn-text">
            Springer CCIS Series | ISSN No. : 1865-0929
          </div>
        </div>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Register Now
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition-all duration-300">
            Download Brochure
          </button>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
