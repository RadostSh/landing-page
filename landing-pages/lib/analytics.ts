/**
 * Google Analytics / gtag helper functions
 */

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
    dataLayer?: any[]
  }
}

/**
 * Check if Google Analytics is loaded
 */
export function isAnalyticsLoaded(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

/**
 * Track a custom event
 */
export function trackEvent(
  action: string,
  category?: string,
  label?: string,
  value?: number
): void {
  if (!isAnalyticsLoaded()) {
    console.warn('Google Analytics not loaded')
    return
  }

  window.gtag!('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

/**
 * Track conversion event (for email capture, signups, etc.)
 */
export function trackConversion(
  sendTo?: string,
  value?: number,
  currency: string = 'USD'
): void {
  if (!isAnalyticsLoaded()) {
    console.warn('Google Analytics not loaded')
    return
  }

  const params: Record<string, any> = {
    value: value || 1.0,
    currency: currency,
  }

  if (sendTo) {
    params.send_to = sendTo
  }

  window.gtag!('event', 'conversion', params)
}

/**
 * Track email capture
 */
export function trackEmailCapture(source: string): void {
  trackEvent('email_capture', 'engagement', source)
}

/**
 * Track survey completion
 */
export function trackSurveyComplete(): void {
  trackEvent('survey_complete', 'engagement', 'full_survey')
}

/**
 * Track page view
 * Note: Measurement ID is already configured in layout.tsx
 * This updates the current page information
 */
export function trackPageView(path: string, title?: string): void {
  if (!isAnalyticsLoaded()) {
    return
  }

  // Use 'set' to update page information without needing measurement ID
  // The measurement ID is already configured when gtag loads
  const config: Record<string, string> = {
    page_path: path,
  }
  
  if (title) {
    config.page_title = title
  }
  
  window.gtag!('set', 'page', config)
  window.gtag!('event', 'page_view', config)
}

