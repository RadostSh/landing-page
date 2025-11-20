'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full border-t border-white/10 mt-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          {/* Copyright */}
          <div className="text-body text-sm md:text-base text-center md:text-left">
            SashiDo © {currentYear} | European Backend Platform
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link 
              href="/about" 
              className="footer-link"
            >
              About
            </Link>
            <Link 
              href="/docs" 
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Docs
            </Link>
            <Link 
              href="/pricing" 
              className="footer-link"
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="footer-link"
            >
              Contact
            </Link>
            <Link 
              href="/privacy" 
              className="footer-link"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="footer-link"
            >
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

