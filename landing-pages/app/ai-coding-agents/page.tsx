import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import HowItWorks from '@/components/HowItWorks'
import SocialProof from '@/components/SocialProof'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import EmailCapture from '@/components/EmailCapture'
import Survey from '@/components/Survey'

export const metadata: Metadata = {
  title: 'AI Coding Agents - Deploy & Scale with SashiDo',
  description: 'Deploy your AI coding agents with confidence. One-click deployment, expert support, EU infrastructure. Start your 14-day free trial today.',
}

export default function AICodingAgentsPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <CTA variant="primary" showSurvey={true} />
      <Survey />
      <CTA variant="secondary" showSurvey={false} />
    </main>
  )
}

