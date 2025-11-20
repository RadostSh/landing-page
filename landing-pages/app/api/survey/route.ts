import { NextRequest, NextResponse } from 'next/server'

interface SurveyData {
  platform?: string[]
  needs_backend?: string
  current_deployment?: string
  pricing?: string
  pain_point?: string
  otherPlatform?: string
  otherDeployment?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: SurveyData = await request.json()

    // Validate required fields
    if (!data.platform || data.platform.length === 0) {
      return NextResponse.json(
        { error: 'Please select at least one platform' },
        { status: 400 }
      )
    }

    if (!data.needs_backend) {
      return NextResponse.json(
        { error: 'Please answer the backend question' },
        { status: 400 }
      )
    }

    if (!data.current_deployment) {
      return NextResponse.json(
        { error: 'Please select your current deployment option' },
        { status: 400 }
      )
    }

    if (!data.pricing) {
      return NextResponse.json(
        { error: 'Please select a pricing expectation' },
        { status: 400 }
      )
    }

    if (!data.pain_point || data.pain_point.trim().length === 0) {
      return NextResponse.json(
        { error: 'Please describe your biggest challenge' },
        { status: 400 }
      )
    }

    // Get Airtable configuration from environment variables
    const airtableBaseId = process.env.AIRTABLE_BASE_ID
    const airtableApiKey = process.env.AIRTABLE_API_KEY
    const airtableTableName = process.env.AIRTABLE_TABLE_NAME || 'Survey Responses'

    if (!airtableBaseId || !airtableApiKey) {
      console.error('Missing Airtable configuration')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Format platforms array - if "Other" is selected, include the otherPlatform text
    const platformsText = data.platform.includes('Other') && data.otherPlatform
      ? data.platform.map(p => p === 'Other' ? `Other: ${data.otherPlatform}` : p).join(', ')
      : data.platform.join(', ')

    // Format deployment - if "Other" is selected, include the otherDeployment text
    const deploymentText = data.current_deployment === 'Other' && data.otherDeployment
      ? `Other: ${data.otherDeployment}`
      : data.current_deployment

    // Prepare Airtable record
    const airtableRecord = {
      fields: {
        'Platforms': platformsText,
        'Needs Backend': data.needs_backend,
        'Current Deployment': deploymentText,
        'Pricing Expectation': data.pricing,
        'Biggest Challenge': data.pain_point.trim(),
        'Submitted At': new Date().toISOString(),
      },
    }

    // Submit to Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${airtableBaseId}/${encodeURIComponent(airtableTableName)}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${airtableApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(airtableRecord),
      }
    )

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.json().catch(() => ({}))
      console.error('Airtable API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to submit survey. Please try again.' },
        { status: 500 }
      )
    }

    const result = await airtableResponse.json()

    return NextResponse.json(
      { success: true, id: result.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Survey submission error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

