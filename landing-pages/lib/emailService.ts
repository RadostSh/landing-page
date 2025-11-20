interface SubscribeOptions {
  email: string
  source?: string
  tags?: string[]
}

interface EmailOctopusResponse {
  id?: string
  email_address?: string
  fields?: Record<string, string>
  status?: string
  created_at?: string
  error?: {
    code: string
    message: string
  }
}

/**
 * Subscribe an email to EmailOctopus mailing list
 */
export async function subscribeToEmailOctopus(options: SubscribeOptions): Promise<{ success: boolean; error?: string }> {
  const { email, source, tags } = options

  // Get EmailOctopus configuration from environment variables
  const apiKey = process.env.EMAILOCTOPUS_API_KEY
  const listId = process.env.EMAILOCTOPUS_LIST_ID

  if (!apiKey || !listId) {
    console.error('Missing EmailOctopus configuration: API_KEY or LIST_ID not set')
    return {
      success: false,
      error: 'Email service not configured',
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: 'Invalid email address',
    }
  }

  try {
    // Prepare request body
    const requestBody: {
      email_address: string
      fields?: Record<string, string>
      tags?: string[]
      status?: string
    } = {
      email_address: email,
      status: 'SUBSCRIBED', // Subscribe immediately
    }

    // Add source as a field if provided
    if (source) {
      requestBody.fields = {
        ...requestBody.fields,
        Source: source,
      }
    }

    // Add tags if provided
    if (tags && tags.length > 0) {
      requestBody.tags = tags
    }

    // Make request to EmailOctopus API
    // EmailOctopus API uses api_key as a query parameter
    const response = await fetch(
      `https://emailoctopus.com/api/1.6/lists/${listId}/contacts?api_key=${encodeURIComponent(apiKey)}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      }
    )

    const data: EmailOctopusResponse = await response.json()

    if (!response.ok) {
      // Handle specific error cases
      if (data.error) {
        // Handle duplicate subscription (contact already exists)
        if (data.error.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
          return {
            success: true, // Treat as success - they're already subscribed
            error: undefined,
          }
        }

        return {
          success: false,
          error: data.error.message || 'Failed to subscribe',
        }
      }

      return {
        success: false,
        error: 'Failed to subscribe. Please try again.',
      }
    }

    return {
      success: true,
      error: undefined,
    }
  } catch (error) {
    console.error('EmailOctopus API error:', error)
    return {
      success: false,
      error: 'Network error. Please try again later.',
    }
  }
}

