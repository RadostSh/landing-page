'use client'

import { useState } from 'react'

interface SurveyData {
  currentDeployment: string
  biggestChallenge: string
  monthlyBudget: string
  timeline: string
  email: string
}

export default function Survey() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<SurveyData>({
    currentDeployment: '',
    biggestChallenge: '',
    monthlyBudget: '',
    timeline: '',
    email: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const totalSteps = 5

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thank you! We\'ll be in touch soon with early access.')
        
        // Track conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'survey_complete', {
            event_category: 'engagement',
            event_label: 'full_survey'
          })
        }
      } else {
        setStatus('error')
        setMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  const isStepValid = () => {
    switch (step) {
      case 1: return data.currentDeployment !== ''
      case 2: return data.biggestChallenge !== ''
      case 3: return data.monthlyBudget !== ''
      case 4: return data.timeline !== ''
      case 5: return data.email !== '' && data.email.includes('@')
      default: return false
    }
  }

  if (status === 'success') {
    return (
      <section className="section-container bg-transparent" id="survey">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-h2 mb-4 text-white">Thank You!</h2>
          <p className="text-lg text-blue-100 mb-8">
            {message}
          </p>
          <button
            onClick={() => window.location.href = 'https://www.sashido.io/signup'}
            className="btn-secondary text-lg px-8 py-4"
          >
            Start Your Free Trial
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="section-container bg-transparent" id="survey">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-4 text-white">
            Help Us Understand Your Needs
          </h2>
          <p className="text-lg text-blue-100">
            2-minute survey • Get early access to new features
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-400">Step {step} of {totalSteps}</span>
            <span className="text-sm text-gray-400">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Survey Steps */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 backdrop-blur-md">
          {step === 1 && (
            <div>
              <label className="block text-lg font-semibold mb-4 text-white">
                Where do you currently deploy your applications?
              </label>
              <div className="space-y-3">
                {['AWS', 'Google Cloud', 'Azure', 'Heroku', 'DigitalOcean', 'Other', 'Not deployed yet'].map((option) => (
                  <label key={option} className="flex items-center p-4 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors backdrop-blur-sm">
                    <input
                      type="radio"
                      name="currentDeployment"
                      value={option}
                      checked={data.currentDeployment === option}
                      onChange={(e) => setData({ ...data, currentDeployment: e.target.value })}
                      className="mr-3 w-4 h-4 text-primary"
                    />
                    <span className="text-gray-300">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="block text-lg font-semibold mb-4 text-white">
                What's your biggest deployment challenge?
              </label>
              <div className="space-y-3">
                {[
                  'Complex setup and configuration',
                  'High costs',
                  'Lack of support',
                  'Scaling and performance',
                  'Security and compliance',
                  'Maintenance burden'
                ].map((option) => (
                  <label key={option} className="flex items-center p-4 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors backdrop-blur-sm">
                    <input
                      type="radio"
                      name="biggestChallenge"
                      value={option}
                      checked={data.biggestChallenge === option}
                      onChange={(e) => setData({ ...data, biggestChallenge: e.target.value })}
                      className="mr-3 w-4 h-4 text-primary"
                    />
                    <span className="text-gray-300">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <label className="block text-lg font-semibold mb-4 text-white">
                What's your monthly infrastructure budget?
              </label>
              <div className="space-y-3">
                {[
                  'Less than $50',
                  '$50 - $200',
                  '$200 - $500',
                  '$500 - $1,000',
                  'More than $1,000'
                ].map((option) => (
                  <label key={option} className="flex items-center p-4 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors backdrop-blur-sm">
                    <input
                      type="radio"
                      name="monthlyBudget"
                      value={option}
                      checked={data.monthlyBudget === option}
                      onChange={(e) => setData({ ...data, monthlyBudget: e.target.value })}
                      className="mr-3 w-4 h-4 text-primary"
                    />
                    <span className="text-gray-300">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <label className="block text-lg font-semibold mb-4 text-white">
                When are you planning to deploy?
              </label>
              <div className="space-y-3">
                {[
                  'This week',
                  'This month',
                  'Next 3 months',
                  'Not sure yet'
                ].map((option) => (
                  <label key={option} className="flex items-center p-4 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors backdrop-blur-sm">
                    <input
                      type="radio"
                      name="timeline"
                      value={option}
                      checked={data.timeline === option}
                      onChange={(e) => setData({ ...data, timeline: e.target.value })}
                      className="mr-3 w-4 h-4 text-primary"
                    />
                    <span className="text-gray-300">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <label className="block text-lg font-semibold mb-4 text-white">
                What's your email?
              </label>
              <p className="text-blue-100 mb-4">
                We'll send you early access to features based on your needs.
              </p>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-white placeholder:text-white/50 backdrop-blur-md"
              />
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200">
              {message}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className={`
              px-6 py-3 rounded-lg font-semibold transition-all duration-200
              ${step === 1 
                ? 'opacity-0 cursor-not-allowed' 
                : 'text-gray-300 hover:bg-white/10'
              }
            `}
          >
            ← Back
          </button>

          {step < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`
                px-8 py-3 rounded-lg font-semibold transition-all duration-200
                ${isStepValid()
                  ? 'bg-primary hover:bg-primary-600 text-white'
                  : 'bg-white/10 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isStepValid() || status === 'loading'}
              className={`
                px-8 py-3 rounded-lg font-semibold transition-all duration-200
                ${isStepValid() && status !== 'loading'
                  ? 'bg-secondary hover:bg-secondary-600 text-white'
                  : 'bg-white/10 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              {status === 'loading' ? 'Submitting...' : 'Complete Survey'}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
