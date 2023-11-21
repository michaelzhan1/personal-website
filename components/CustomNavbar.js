'use client'


import { useState } from 'react'


export default function CustomNavbar () {
  const [ navbarOpen, setNavbarOpen ] = useState(false)
  const toggleNavbar = () => setNavbarOpen(!navbarOpen)

  return (
    <>
      {/* Mobile navbar */}
      <div className="mt-7 sticky top-0">
        <svg
          className="w-8 h-8 text-gray-500 ms-3 mb-3"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 23 23"
          stroke="currentColor"
          onClick={toggleNavbar}
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <div className={`w-screen ${navbarOpen ? 'h-36' : 'h-0'} overflow-hidden transition-height duration-200 ease-in-out`}>
          <div className="flex flex-col">
            <a href="/" className="text-base text-navbar-text mb-3">Home</a>
            <a href="/about" className="text-base text-navbar-text mb-3">About</a>
            <a href="/projects" className="text-base text-navbar-text mb-3">Projects</a>
            <a href="/resume.pdf" className="text-base text-navbar-text mb-3" target="_blank">Resume</a>
          </div>
        </div>
      </div>



      {/* Desktop navbar */}
      <div className="hidden md:block sticky top-0 text-navbar-text text-base my-4 py-2 bg-main-bg">
        <div className="flex justify-end mr-auto">
          <a href="/" className="p-2">Home</a>
          <a href="/about" className="p-2">About</a>
          <a href="/projects" className="p-2">Projects</a>
          <a href="/resume.pdf" className='p-2' target="_blank">Resume</a>
        </div>
      </div>
    </>
  )
}