'use client'

import Link from 'next/link'

const BENEFITS = [
  'Deploy from Lovable, Replit, v0.dev, Cursor',
  'European data hosting (GDPR-compliant)',
  'Parse Server + MongoDB + S3 included',
  '14-day free trial, no credit card',
]

const CheckIcon = () => (
  <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

export default function Hero() {
  return (
    <section className="section-container pt-20 md:pt-32">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Deploy Your AI-Generated App to Production in 60 Seconds
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-body-light mb-8 max-w-3xl mx-auto">
          The backend platform built for Lovable, Replit, v0.dev, and Cursor users.
          European-hosted, GDPR-compliant, Parse Server powered.
        </p>
        
        {/* Benefits Checklist */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <CheckIcon />
              <span className="text-body font-medium">{benefit}</span>
            </div>
          ))}
        </div>
        
        {/* Primary CTAs */}
        <div className="cta-container">
          <Link 
            href="https://dashboard.sashido.io/register" 
            target="_blank"
            className="btn-primary btn-large"
          >
            Start Free Trial
          </Link>
          <Link 
            href="#demo"
            className="btn-outline btn-large"
          >
            Watch Demo (2 min)
          </Link>
        </div>
      </div>
    </section>
  )
}
