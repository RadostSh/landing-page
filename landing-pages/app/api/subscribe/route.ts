import { NextRequest, NextResponse } from 'next/server'
import { subscribeToEmailOctopus } from '@/lib/emailService'

interface SubscribeRequest {
  email: string
  source?: string
  tags?: string[]
}

export async function POST(request: NextRequest) {
  try {
    const data: SubscribeRequest = await request.json()

    // Validate email
    if (!data.email || typeof data.email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Subscribe to EmailOctopus
    const result = await subscribeToEmailOctopus({
      email: data.email,
      source: data.source || 'landing_page',
      tags: data.tags,
    })

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to subscribe. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

