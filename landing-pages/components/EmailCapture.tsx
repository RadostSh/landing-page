'use client'

import { useState } from 'react'
import { trackEmailCapture, trackConversion } from '@/lib/analytics'

export function EmailCapture({ source }: { source: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      // Send to EmailOctopus
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        // Track analytics events
        trackEmailCapture(source)
        // Only track conversion if conversion ID is configured (not placeholder)
        const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID
        if (conversionId && !conversionId.includes('XXXXXX')) {
          trackConversion(conversionId, 1.0, 'USD')
        }
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Failed to subscribe. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="alert-success max-w-md mx-auto text-center">
        <h3 className="text-xl font-bold mb-2">🎉 You're on the list!</h3>
        <p>
          Check your email for trial setup instructions.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input-primary flex-1"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Submitting...' : 'Start Free Trial'}
        </button>
      </form>
      {status === 'error' && errorMessage && (
        <div className="mt-3 alert-error text-center">
          {errorMessage}
        </div>
      )}
    </div>
  )
}
