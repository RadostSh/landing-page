'use client'

export default function SolutionSection() {
  const features = [
    {
      icon: '🚀',
      title: 'One-Click Deployment',
      description: 'Upload your code → We handle the rest\nBackend live in 60 seconds'
    },
    {
      icon: '🏗️',
      title: 'Parse Server Expertise',
      description: '10 years running Parse Server in production\nTrusted by 1,000+ apps'
    },
    {
      icon: '🇪🇺',
      title: 'European Infrastructure',
      description: 'EU data centers (Paris)\nGDPR-compliant by default\nNo data leaves Europe'
    },
    {
      icon: '💰',
      title: 'Developer-Friendly Pricing',
      description: '14-day free trial\n$20/month starter plan\nNo surprise charges'
    }
  ]

  return (
    <section className="section-container bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-white mb-4">
            SashiDo: The Backend Platform AI Coding Tools Deploy To
          </h2>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card group"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-lg font-medium whitespace-pre-line">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
