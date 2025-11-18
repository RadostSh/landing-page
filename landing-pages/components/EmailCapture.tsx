'use client'

import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thanks! Check your email for next steps.')
        setEmail('')
        
        // Track conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'email_capture', {
            event_category: 'engagement',
            event_label: 'hero_section'
          })
        }
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <section className="section-container bg-transparent" id="email-capture">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-h2 text-white mb-4">
            Get Started Today
          </h2>
          <p className="text-lg text-blue-100">
            Start your 14-day free trial. Deploy your AI coding agent in minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === 'loading' || status === 'success'}
              className="input-primary flex-1"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`
                btn-primary whitespace-nowrap
                ${status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''}
                ${status === 'success' ? 'opacity-75 cursor-not-allowed' : ''}
              `}
            >
              {status === 'loading' ? 'Sending...' : status === 'success' ? '✓ Sent!' : 'Start Free Trial'}
            </button>
          </div>

          {message && (
            <div className={`
              mt-4 p-4 rounded-lg text-center font-medium
              ${status === 'success' ? 'bg-secondary/20 text-secondary-200 border border-secondary/30' : 'bg-red-500/20 text-red-200 border border-red-500/30'}
            `}>
              {message}
            </div>
          )}
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}
