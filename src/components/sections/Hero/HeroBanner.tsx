import React from 'react'
import { ArrowDown } from 'lucide-react'

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen bg-gradient flex items-center">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(/images/hero/university-campus.jpg)'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
          INTERNATIONAL CONFERENCE ON ARTIFICIAL
          <br />
          <span className="text-5xl md:text-7xl">INTELLIGENCE</span>
          <br />
          <span className="text-4xl md:text-6xl">IN HEALTH CARE</span>
        </h1>
        
        <div className="text-3xl md:text-4xl font-bold mb-8 text-blue-200">
          (ICAIH-2025)
        </div>
        
        <div className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto">
          ST ALOYSIUS (DEEMED TO BE UNIVERSITY) INSTITUTE OF MANAGEMENT AND IT
        </div>
        
        <div className="text-2xl md:text-3xl font-bold mb-12">
          30TH & 31ST OCTOBER 2025
        </div>
        
        {/* Springer CCIS Logo */}
        <div className="inline-block bg-white p-4 rounded-lg mb-12">
          <div className="flex items-center space-x-4">
            <span className="text-orange-500 font-bold text-2xl">🐎 Springer</span>
            <span className="bg-orange-500 text-white px-3 py-1 rounded font-bold">ccis</span>
          </div>
          <div className="text-gray-700 text-sm mt-2">
            Springer CCIS Series ( ISSN No. - 1865-0929 )
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner

