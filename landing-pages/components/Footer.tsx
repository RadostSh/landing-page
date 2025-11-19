'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full border-t border-white/10 mt-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          {/* Copyright */}
          <div className="text-gray-300 text-sm md:text-base text-center md:text-left">
            SashiDo © {currentYear} | European Backend Platform
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-white text-sm md:text-base transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/docs" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-sm md:text-base transition-colors duration-200"
            >
              Docs
            </Link>
            <Link 
              href="/pricing" 
              className="text-gray-300 hover:text-white text-sm md:text-base transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-white text-sm md:text-base transition-colors duration-200"
            >
              Contact
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-300 hover:text-white text-sm md:text-base transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-300 hover:text-white text-sm md:text-base transition-colors duration-200"
            >
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

