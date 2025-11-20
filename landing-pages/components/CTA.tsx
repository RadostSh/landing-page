'use client'

import Link from 'next/link'

interface CTAProps {
  showSurvey?: boolean
}

export default function CTA({ showSurvey = true }: CTAProps) {
  return (
    <section className="section-container" id="email-capture">
      <div className="max-w-4xl mx-auto">
        <div className="card">
          <div className="text-center mb-8">
            <h2 className="text-h3 text-white mb-4">
              Ready to Deploy Your AI-Generated App?
            </h2>
            <p className="text-lg text-body-light">
              Join 50+ developers deploying Lovable, Replit, and v0.dev apps to production with SashiDo.
            </p>
          </div>
          
          <div className="cta-container mb-8">
            <Link 
              href="https://dashboard.sashido.io/register"
              target="_blank"
              className="btn-primary btn-large w-full sm:w-auto text-center"
            >
              Start Free Trial
            </Link>
          </div>
          
          {showSurvey && (
            <>
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/5 text-body font-medium">
                    or
                  </span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-body mb-4">
                  Take our 2-minute survey and get early access + 50% off your first month.
                </p>
                <button
                  onClick={() => {
                    const surveySection = document.getElementById('survey')
                    surveySection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-outline"
                >
                  Take Survey Instead
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
