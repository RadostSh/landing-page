'use client'

import { useState } from 'react'

const SURVEY_QUESTIONS = [
  {
    id: 'platform',
    question: 'Which AI coding platform do you use? (Select all that apply)',
    type: 'checkbox',
    options: ['Lovable', 'Replit', 'v0.dev (Vercel)', 'Cursor', 'Bolt.new', 'Other', 'I don\'t use AI coding tools (yet)'],
  },
  {
    id: 'needs_backend',
    question: 'Do your AI-generated apps need a backend? (database, API, authentication)',
    type: 'radio',
    options: ['Yes, always', 'Yes, sometimes', 'No, just static frontends', 'Not sure yet'],
  },
  {
    id: 'current_deployment',
    question: 'Where do you currently deploy your apps?',
    type: 'radio',
    options: [
      "Don't deploy (just prototypes)",
      'Vercel/Netlify (frontend only)',
      'Railway',
      'Heroku',
      'Self-hosted',
      'Lovable Cloud / Replit hosting',
      'Other',
    ],
  },
  {
    id: 'pricing',
    question: 'What would you pay for a backend platform (Parse Server + MongoDB + S3)?',
    type: 'radio',
    options: ['$0 (free only)', '$10-20/month', '$20-50/month', '$50-100/month', '$100+/month', 'Depends on features'],
  },
  {
    id: 'pain_point',
    question: "What's your biggest challenge deploying AI-generated apps to production?",
    type: 'textarea',
    maxLength: 200,
  },
]

export default function Survey() {
  const [responses, setResponses] = useState<Record<string, any>>({})
  const [currentQuestion, setCurrentQuestion] = useState(-1) // -1 = introduction, 0+ = questions
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [error, setError] = useState('')
  const [otherPlatform, setOtherPlatform] = useState('')
  const [otherDeployment, setOtherDeployment] = useState('')

  const question = currentQuestion >= 0 ? SURVEY_QUESTIONS[currentQuestion] : null

  const isStepValid = () => {
    if (!question) return false
    
    const response = responses[question.id]
    
    if (question.type === 'checkbox') {
      return Array.isArray(response) && response.length > 0
    }
    
    if (question.type === 'radio') {
      return response && response !== ''
    }
    
    if (question.type === 'textarea') {
      return response && response.trim().length > 0 && response.length <= (question.maxLength || 200)
    }
    
    return false
  }

  const handleStartSurvey = () => {
    setCurrentQuestion(0)
  }

  const handleCheckboxChange = (option: string) => {
    if (!question) return
    const current = responses[question.id] || []
    const isArray = Array.isArray(current)
    const selected = isArray ? current : []
    
    if (selected.includes(option)) {
      const updated = selected.filter((item: string) => item !== option)
      setResponses({ ...responses, [question.id]: updated })
      if (option === 'Other') {
        setOtherPlatform('')
      }
    } else {
      setResponses({ ...responses, [question.id]: [...selected, option] })
    }
  }

  const handleRadioChange = (option: string) => {
    if (!question) return
    setResponses({ ...responses, [question.id]: option })
    if (question.id === 'current_deployment' && option !== 'Other') {
      setOtherDeployment('')
    }
  }

  const handleTextareaChange = (value: string) => {
    if (!question) return
    if (value.length <= (question.maxLength || 200)) {
      setResponses({ ...responses, [question.id]: value })
    }
  }

  const handleNext = () => {
    if (!question) return
    if (isStepValid() && currentQuestion < SURVEY_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setError('')
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setError('')
    } else if (currentQuestion === 0) {
      setCurrentQuestion(-1) // Go back to introduction
      setError('')
    }
  }

  const handleSubmit = async () => {
    if (!isStepValid()) {
      setError('Please answer this question before submitting.')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      // Prepare data for submission
      const submissionData = {
        ...responses,
        otherPlatform: otherPlatform || undefined,
        otherDeployment: otherDeployment || undefined,
      }

      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsComplete(true)
        
        // Track conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'survey_complete', {
            event_category: 'engagement',
            event_label: 'full_survey'
          })
        }
      } else {
        setError(result.error || 'Something went wrong. Please try again.')
        setIsSubmitting(false)
      }
    } catch (error) {
      setError('Network error. Please try again.')
      setIsSubmitting(false)
    }
  }

  if (isComplete) {
    return (
      <section className="section-container bg-transparent" id="survey">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-h2 mb-4 text-white">
            Thank you! Your feedback helps us build the platform you need.
          </h2>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-8 backdrop-blur-md">
            <p className="text-lg text-blue-100 mb-2">Your 50% off code:</p>
            <div className="inline-block bg-secondary/20 border-2 border-secondary rounded-lg px-6 py-3 mb-4">
              <code className="text-2xl font-bold text-secondary-200">EARLY50</code>
            </div>
            <p className="text-sm text-gray-400">(valid for first month)</p>
          </div>
          <div className="mb-8">
            <p className="text-lg text-white mb-4">Ready to deploy now?</p>
          <button
            onClick={() => window.location.href = 'https://www.sashido.io/signup'}
            className="btn-secondary text-lg px-8 py-4"
          >
              Start Free Trial
          </button>
          </div>
          <p className="text-sm text-gray-400">
            We'll email you when new features launch.
          </p>
        </div>
      </section>
    )
  }

  // Show introduction screen
  if (currentQuestion === -1) {
    return (
      <section className="section-container bg-transparent" id="survey">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-4 text-white">
              Help Us Build the Best Backend for AI-Generated Apps
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              We're building SashiDo specifically for developers using Lovable, Replit, v0.dev, and Cursor.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 backdrop-blur-md">
            <p className="text-lg text-white mb-6 text-center">
              Take 2 minutes to share your needs, and get:
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center p-4 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-2xl mr-4">✅</span>
                <span className="text-gray-300 text-lg">50% off your first month</span>
              </div>
              <div className="flex items-center p-4 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-2xl mr-4">✅</span>
                <span className="text-gray-300 text-lg">Early access to new features</span>
              </div>
              <div className="flex items-center p-4 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-2xl mr-4">✅</span>
                <span className="text-gray-300 text-lg">Influence our roadmap</span>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleStartSurvey}
                className="btn-primary text-lg px-8 py-4"
              >
                Start Survey
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-container bg-transparent" id="survey">
      <div className="max-w-2xl mx-auto">
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
            <span className="text-sm text-gray-400">Question {currentQuestion + 1} of {SURVEY_QUESTIONS.length}</span>
            <span className="text-sm text-gray-400">{Math.round(((currentQuestion + 1) / SURVEY_QUESTIONS.length) * 100)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / SURVEY_QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 backdrop-blur-md">
          <h3 className="text-lg font-semibold mb-6 text-white">{question?.question}</h3>

          {/* Checkbox Question */}
          {question && question.type === 'checkbox' && (
              <div className="space-y-3">
              {question.options?.map((option) => (
                <label
                  key={option}
                  className="flex items-center p-4 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                    <input
                    type="checkbox"
                    checked={(responses[question.id] || []).includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="mr-3 w-4 h-4 text-primary rounded"
                    />
                    <span className="text-gray-300">{option}</span>
                  </label>
                ))}
              {question.id === 'platform' && (responses[question.id] || []).includes('Other') && (
                <div className="mt-3 ml-7">
                  <input
                    type="text"
                    value={otherPlatform}
                    onChange={(e) => setOtherPlatform(e.target.value)}
                    placeholder="Please specify..."
                    className="input-primary"
                  />
            </div>
          )}
            </div>
          )}

          {/* Radio Question */}
          {question && question.type === 'radio' && (
              <div className="space-y-3">
              {question.options?.map((option) => (
                <label
                  key={option}
                  className="flex items-center p-4 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                    <input
                      type="radio"
                    name={question.id}
                      value={option}
                    checked={responses[question.id] === option}
                    onChange={() => handleRadioChange(option)}
                      className="mr-3 w-4 h-4 text-primary"
                    />
                    <span className="text-gray-300">{option}</span>
                  </label>
                ))}
              {question.id === 'current_deployment' && responses[question.id] === 'Other' && (
                <div className="mt-3 ml-7">
                  <input
                    type="text"
                    value={otherDeployment}
                    onChange={(e) => setOtherDeployment(e.target.value)}
                    placeholder="Please specify..."
                    className="input-primary"
                  />
            </div>
          )}
            </div>
          )}

          {/* Textarea Question */}
          {question && question.type === 'textarea' && (
            <div>
              <p className="text-sm text-blue-100 mb-4">
                (Open text, {question.maxLength || 200} characters max)
              </p>
              <textarea
                value={responses[question.id] || ''}
                onChange={(e) => handleTextareaChange(e.target.value)}
                placeholder="Tell us about your challenges..."
                rows={5}
                maxLength={question.maxLength || 200}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-white placeholder:text-white/50 backdrop-blur-md resize-none"
              />
              <div className="mt-2 text-right">
                <span className={`text-sm ${(responses[question.id] || '').length > (question.maxLength || 200) * 0.9 ? 'text-yellow-400' : 'text-gray-400'}`}>
                  {(responses[question.id] || '').length} / {question.maxLength || 200} characters
                </span>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200">
              {error}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            className={`
              px-6 py-3 rounded-lg font-semibold transition-all duration-200
              text-gray-300 hover:bg-white/10
            `}
          >
            ← Back
          </button>

          {currentQuestion < SURVEY_QUESTIONS.length - 1 ? (
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
              disabled={!isStepValid() || isSubmitting}
              className={`
                px-8 py-3 rounded-lg font-semibold transition-all duration-200
                ${isStepValid() && !isSubmitting
                  ? 'bg-secondary hover:bg-secondary-600 text-white'
                  : 'bg-white/10 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Survey'}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
