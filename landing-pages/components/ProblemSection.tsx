'use client'

const PAIN_POINTS = [
  'Railway/Vercel require manual Parse Server setup',
  'Self-hosting is complex and time-consuming',
  'Firebase doesn\'t support Parse Server',
  'US-only hosting doesn\'t meet EU compliance needs',
]

export default function ProblemSection() {
  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="text-h2 text-white mb-6">
            AI Coding Tools Generate Apps. But Where Do You Deploy Them?
          </h2>
          <p className="text-lg text-body-light leading-relaxed mb-8">
            You built an amazing app with Lovable/Replit/v0.dev in minutes.<br />
            But now what?
          </p>
        </div>
        
        {/* Pain Points List */}
        <div className="space-y-4 mb-12">
          {PAIN_POINTS.map((point, index) => (
            <div key={index} className="card flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">❌</span>
              <p className="text-lg text-body">
                {point}
              </p>
            </div>
          ))}
        </div>
        
        {/* Conclusion */}
        <div className="card text-center">
          <p className="text-lg md:text-xl text-body font-medium mb-2">
            There&apos;s no &quot;deploy to production&quot; button for AI-generated Parse apps.
          </p>
          <p className="text-xl md:text-2xl text-white font-bold">
            Until now.
          </p>
        </div>
      </div>
    </section>
  )
}