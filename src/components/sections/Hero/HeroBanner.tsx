// src/components/sections/Hero/HeroBanner.tsx
const HeroBanner = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Remove the background-image style from here since it's now global */}
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-6xl">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-10 rounded-full mb-6">
            <div className="text-green-400 text-3xl font-bold">I</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight">
            INTERNATIONAL CONFERENCE ON
            <br />
            <span className="text-blue-300">ARTIFICIAL INTELLIGENCE</span>
            <br />
            <span className="text-blue-200">IN HEALTH CARE</span>
          </h1>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-100">
          (ICAIH-2025)
        </h2>
        
        <p className="text-xl md:text-2xl mb-4 font-medium">
          ST ALOYSIUS (DEEMED TO BE UNIVERSITY)
          <br />
          INSTITUTE OF MANAGEMENT AND IT
        </p>
        
        <p className="text-lg md:text-xl mb-8 text-blue-100">
          20TH & 21ST, MARCH, 2025
        </p>
        
        {/* Springer Logo */}
        <div className="bg-white rounded-lg p-4 inline-block mb-8">
          <div className="text-black font-bold text-lg">
            📚 Springer
            <span className="bg-orange-500 text-white px-2 py-1 rounded ml-2">CCIS</span>
          </div>
          <div className="text-sm text-gray-600">
            Springer CCIS Series | ISSN No. : 1865-0929
          </div>
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
