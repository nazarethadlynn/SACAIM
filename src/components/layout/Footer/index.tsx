import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* University Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ST ALOYSIUS</h3>
            <p className="text-gray-300 mb-2">(DEEMED TO BE UNIVERSITY)</p>
            <p className="text-gray-300 mb-2">Institute of Management and IT - AIMIT</p>
            <p className="text-gray-300">Beeri, Kotekar, Mangalore-575022</p>
            <p className="text-gray-300 mt-2">Phone: 91 8242368881/82</p>
            <p className="text-gray-300">Email: hemalatha@staloysius.ac.in</p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/keynote-speakers" className="hover:text-white transition-colors">Key Speakers</Link></li>
              <li><Link href="/important-dates" className="hover:text-white transition-colors">Important Dates</Link></li>
            </ul>
          </div>

          {/* Featured Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Featured Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">SACAIM 2024</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Our Achievements</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Admissions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; Copyright AIMIT. All Rights Reserved</p>
          <p className="mt-2">Designed by</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

