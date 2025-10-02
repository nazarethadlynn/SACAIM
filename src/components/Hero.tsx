'use client'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Blue Overlay */}
      <div className="fixed inset-0 bg-blue-800/70 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          INTERNATIONAL CONFERENCE ON
          <br />
          <span className="text-blue-200">ARTIFICIAL</span>
          <br />
          <span className="text-blue-200">INTELLIGENCE</span>
          <br />
          IN HEALTH CARE
        </h1>

        <div className="text-4xl md:text-5xl font-bold mb-8 text-blue-300">
          (ICAIH-2025)
        </div>

        <div className="text-xl md:text-2xl font-semibold mb-6 max-w-4xl mx-auto">
          ST ALOYSIUS (DEEMED TO BE UNIVERSITY) INSTITUTE OF MANAGEMENT AND IT
        </div>

        <div className="text-2xl md:text-3xl font-bold mb-12">
          20TH & 21ST, MARCH, 2025
        </div>

        <div className="bg-white rounded-lg p-6 inline-block shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-800 rounded mr-3 flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-black font-bold text-2xl">Springer</span>
            </div>
            <div className="bg-orange-500 text-white px-4 py-2 rounded font-bold text-lg">
              CCIS
            </div>
          </div>
          <div className="text-black text-base mt-3">
            Springer CCIS Series ( ISSN No. - 1865-0929 )
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
