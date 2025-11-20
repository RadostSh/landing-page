'use client'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Export code from Lovable/Replit/v0.dev',
      description: '(or deploy directly via our MCP Server)'
    },
    {
      number: '02',
      title: 'Upload to SashiDo',
      description: 'One ZIP file or GitHub repo'
    },
    {
      number: '03',
      title: 'Your app is live',
      description: 'Backend + database + storage ready in 60 seconds'
    },
    {
      number: '04',
      title: 'Scale as you grow',
      description: 'Add Redis, background jobs, custom domains'
    }
  ]

  return (
    <section className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="section-header-large">
          <h2 className="text-h2 text-white mb-4">
            From Code to Production
          </h2>
          <p className="text-lg text-body-light max-w-3xl mx-auto">
            Four simple steps to get your AI coding agent live and serving users
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines (hidden on mobile) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-white opacity-30" 
               style={{ marginLeft: '10%', marginRight: '10%' }} />
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
            >
              {/* Step Card */}
              <div className="card hover:scale-105 relative z-10">
                {/* Step Number */}
                <div className="text-6xl font-bold text-white mb-4 opacity-50">
                  {step.number}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
