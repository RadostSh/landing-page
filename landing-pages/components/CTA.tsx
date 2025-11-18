'use client'

import Link from 'next/link'

interface CTAProps {
  variant?: 'primary' | 'secondary'
  showSurvey?: boolean
}

export default function CTA({ variant = 'primary', showSurvey = true }: CTAProps) {
  if (variant === 'secondary') {
    return (
      <section className="section-container bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 text-white mb-6">
            Ready to Deploy Your AI Agent?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Join developers who trust SashiDo for their production AI infrastructure
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="https://www.sashido.io/signup"
              target="_blank"
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg inline-block"
            >
              Start Free Trial
            </Link>
            <Link
              href="https://www.sashido.io/contact"
              target="_blank"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-lg inline-block backdrop-blur-sm"
            >
              Talk to Sales
            </Link>
          </div>
          
          <p className="text-sm text-gray-400 mt-6">
            14-day free trial • No credit card required • Expert support included
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="section-container bg-transparent" id="email-capture">
      <div className="max-w-4xl mx-auto">
        <div className="card">
          <div className="text-center mb-8">
            <h2 className="text-h3 text-white mb-4">
              Ready to Deploy Your AI-Generated App?
            </h2>
            <p className="text-lg text-blue-100">
              Join 50+ developers deploying Lovable, Replit, and v0.dev apps to production with SashiDo.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              href="https://www.sashido.io/signup"
              target="_blank"
              className="btn-primary text-lg px-8 py-4 inline-block w-full sm:w-auto text-center"
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
                  <span className="px-4 bg-white/5 text-gray-300 font-medium backdrop-blur-sm">
                    or
                  </span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-300 mb-4">
                  Take our 2-minute survey and get early access + 50% off your first month.
                </p>
                <button
                  onClick={() => {
                    const surveySection = document.getElementById('survey')
                    surveySection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-outline inline-block"
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
