'use client'

export default function ProblemSection() {
  return (
    <section className="section-container bg-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-h2 text-white mb-6">
            AI Coding Tools Generate Apps. But Where Do You Deploy Them?
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed mb-8">
            You built an amazing app with Lovable/Replit/v0.dev in minutes.<br />
            But now what?
          </p>
        </div>
        
        {/* Pain Points List */}
        <div className="space-y-4 mb-12">
          <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all duration-300">
            <span className="text-3xl flex-shrink-0">❌</span>
            <p className="text-lg text-gray-300">
              Railway/Vercel require manual Parse Server setup
            </p>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all duration-300">
            <span className="text-3xl flex-shrink-0">❌</span>
            <p className="text-lg text-gray-300">
              Self-hosting is complex and time-consuming
            </p>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all duration-300">
            <span className="text-3xl flex-shrink-0">❌</span>
            <p className="text-lg text-gray-300">
              Firebase doesn't support Parse Server
            </p>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all duration-300">
            <span className="text-3xl flex-shrink-0">❌</span>
            <p className="text-lg text-gray-300">
              US-only hosting doesn't meet EU compliance needs
            </p>
          </div>
        </div>
        
        {/* Conclusion */}
        <div className="text-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all duration-300">
          <p className="text-lg md:text-xl text-gray-300 font-medium mb-2">
            There's no "deploy to production" button for AI-generated Parse apps.
          </p>
          <p className="text-xl md:text-2xl text-white font-bold">
            Until now.
          </p>
        </div>
      </div>
    </section>
  )
}

