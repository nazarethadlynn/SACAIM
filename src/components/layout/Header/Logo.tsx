import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-3">
      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
        <span className="text-xl font-bold text-blue-600">ICAIH</span>
      </div>
    </Link>
  )
}

export default Logo
