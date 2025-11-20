'use client'

import Link from 'next/link'

export default function Pricing() {
  return (
    <section className="section-container">
      <div className="max-w-3xl mx-auto">
        <div className="card text-center">
          {/* Headline */}
          <h2 className="text-h2 text-white mb-6">
            14-Day Free Trial
          </h2>
          
          {/* Description */}
          <div className="space-y-3 mb-8">
            <p className="text-lg text-body-light">
              Try everything, no credit card required
            </p>
            <p className="text-xl font-bold text-white">
              Then $20/month for production apps
            </p>
          </div>
          
          {/* CTA */}
          <Link
            href="https://dashboard.sashido.io/register"
            target="_blank"
            className="btn-primary btn-large"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </section>
  )
}
