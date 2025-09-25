import React from 'react'
import Navigation from './Navigation'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  )
}

export default Header
