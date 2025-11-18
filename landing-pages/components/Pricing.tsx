'use client'

import Link from 'next/link'

export default function Pricing() {
  return (
    <section className="section-container bg-transparent">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md p-8 text-center hover:bg-white/10 transition-all duration-300">
          {/* Headline */}
          <h2 className="text-h2 text-white mb-6">
            14-Day Free Trial
          </h2>
          
          {/* Description */}
          <div className="space-y-3 mb-8">
            <p className="text-lg text-blue-100">
              Try everything, no credit card required
            </p>
            <p className="text-xl font-bold text-white">
              Then $20/month for production apps
            </p>
          </div>
          
          {/* CTA */}
          <Link
            href="https://www.sashido.io/signup"
            target="_blank"
            className="btn-primary text-lg px-8 py-4 inline-block"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </section>
  )
}
