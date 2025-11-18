# Landing Pages & Survey Specification

Frontend - React/Next.js


---

## 🎯 Purpose

**What:** 1 landing pages + embedded survey to validate market demand .


**Pages to Create:**

1. **/ai-coding-agents** - Main landing page (all platforms)

---

## 📋 Requirements

### Functional Requirements:

1. **High Conversion** - Clean design, clear CTA, fast loading
2. **Embedded Survey** - 5 questions, <2 minutes to complete
3. **Email Capture** - EmailOctopus/Mailchimp integration
4. **Mobile Responsive** - 50%+ of traffic will be mobile

### Non-Functional Requirements:

1. **Performance** - PageSpeed score 90+, load in <2 seconds
2. **SEO** - Proper meta tags, schema markup
3. **Accessibility** - WCAG 2.1 AA compliance

---

## 🎨 Landing Page 1: /ai-coding-agents (Main)

### Copy

**Headline:**

```
Deploy Your AI-Generated App to Production in 60 Seconds
```

**Subheadline:**

```
The backend platform built for Lovable, Replit, v0.dev, and Cursor users.
European-hosted, GDPR-compliant, Parse Server powered.
```

**Hero Section:**

```
✅ Deploy from Lovable, Replit, v0.dev, Cursor
✅ European data hosting (GDPR-compliant)
✅ Parse Server + MongoDB + S3 included
✅ 14-day free trial, no credit card

[Start Free Trial] [Watch Demo (2 min)]
```

**Problem Section:**

**Headline:** "AI Coding Tools Generate Apps. But Where Do You Deploy Them?"

```
You built an amazing app with Lovable/Replit/v0.dev in minutes.
But now what?

❌ Railway/Vercel require manual Parse Server setup
❌ Self-hosting is complex and time-consuming
❌ Firebase doesn't support Parse Server
❌ US-only hosting doesn't meet EU compliance needs

There's no "deploy to production" button for AI-generated Parse apps.

Until now.
```

**Solution Section:**

**Headline:** "SashiDo: The Backend Platform AI Coding Tools Deploy To"

```
🚀 One-Click Deployment
   Upload your code → We handle the rest
   Backend live in 60 seconds

🏗️ Parse Server Expertise
   10 years running Parse Server in production
   Trusted by 1,000+ apps

🇪🇺 European Infrastructure
   EU data centers (Paris)
   GDPR-compliant by default
   No data leaves Europe

💰 Developer-Friendly Pricing
   14-day free trial
   $20/month starter plan
   No surprise charges
```

**How It Works:**

```
1. Export code from Lovable/Replit/v0.dev
   (or deploy directly via our MCP Server)

2. Upload to SashiDo
   One ZIP file or GitHub repo

3. Your app is live
   Backend + database + storage ready in 60 seconds

4. Scale as you grow
   Add Redis, background jobs, custom domains
```

**Social Proof:**

```
"SashiDo made deploying my Lovable app effortless. I went from prototype to production in under 5 minutes."
— Alex M., Indie Hacker

"Finally, a Parse Server host that understands European compliance. Perfect for our healthcare app."
— Sarah L., CTO, MedTech Startup

[Logos: Product Hunt, LA County, Cirque du Soleil, USGA, LPGA]
```

**Pricing Teaser:**

```
14-Day Free Trial
Try everything, no credit card required
Then $20/month for production apps

[Start Free Trial]
```

**CTA Section:**

```
Ready to Deploy Your AI-Generated App?

Join 50+ developers deploying Lovable, Replit, and v0.dev apps to production with SashiDo.

[email input]  [Start Free Trial]

Or take our 2-minute survey and get early access + 50% off your first month.
[Take Survey Instead]
```

**Footer:**

```
SashiDo © 2026 | European Backend Platform
[About] [Docs] [Pricing] [Contact] [Privacy] [Terms]
```

---

## 📊 Embedded Survey

### Survey Questions (All Landing Pages)

**Introduction:**

```
Help Us Build the Best Backend for AI-Generated Apps

We're building SashiDo specifically for developers using Lovable, Replit, v0.dev, and Cursor.

Take 2 minutes to share your needs, and get:
✅ 50% off your first month
✅ Early access to new features
✅ Influence our roadmap

[Start Survey]
```

**Question 1: Platform Usage**

```
Which AI coding platform do you use? (Select all that apply)

□ Lovable
□ Replit
□ v0.dev (Vercel)
□ Cursor
□ Bolt.new
□ Other (specify): _______
□ I don't use AI coding tools (yet)
```

**Question 2: Deployment Needs**

```
Do your AI-generated apps need a backend? (database, API, authentication)

○ Yes, always
○ Yes, sometimes
○ No, just static frontends
○ Not sure yet
```

**Question 3: Current Deployment**

```
Where do you currently deploy your apps?

○ Don't deploy (just prototypes)
○ Vercel/Netlify (frontend only)
○ Railway
○ Heroku
○ Self-hosted
○ Lovable Cloud / Replit hosting
○ Other: _______
```

**Question 4: Pricing Expectations**

```
What would you pay for a backend platform (Parse Server + MongoDB + S3)?

○ $0 (free tier only)
○ $10-20/month
○ $20-50/month
○ $50-100/month
○ $100+/month
○ Depends on features
```

**Question 5: Biggest Pain Point**

```
What's your biggest challenge deploying AI-generated apps to production?

(Open text, 200 characters)
_________________________________________________
```

**Thank You Page:**

```
🎉 Thank you! Your feedback helps us build the platform you need.

Your 50% off code: EARLY50 (valid for first month)

Ready to deploy now?
[Start Free Trial]

We'll email you when new features launch.
[Your survey responses will be analyzed in Week 5-6 for GO/NO-GO decision]
```

---

## 💻 Technical Implementation

### Stack(suggested, but not mandatory):

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Survey:** Typeform embedded or custom form with Airtable
- **Email:** EmailOctopus API
- **Hosting:** Vercel (fast, free)

### Project Structure:

```
landing-pages/
├── app/
│   ├── ai-coding-agents/
│   │   └── page.tsx
│   ├── lovable-deployment/
│   │   └── page.tsx
│   ├── replit-deployment/
│   │   └── page.tsx
│   └── layout.tsx
├── components/
│   ├── Hero.tsx
│   ├── ProblemSection.tsx
│   ├── SolutionSection.tsx
│   ├── HowItWorks.tsx
│   ├── Pricing.tsx
│   ├── CTA.tsx
│   ├── Survey.tsx
│   └── EmailCapture.tsx
├── lib/
│   ├── analytics.ts
│   └── emailService.ts
└── public/
    ├── images/
    └── videos/
```

---

### Email Capture Component:

```typescript
'use client';

import { useState } from 'react';

export function EmailCapture({ source }: { source: string }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Send to EmailOctopus
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });

      if (response.ok) {
        setStatus('success');
        // Track conversion
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-XXXXXX/XXXXXX',
            value: 1.0,
            currency: 'USD',
          });
        }
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-green-900 mb-2">🎉 You're on the list!</h3>
        <p className="text-green-700">
          Check your email for trial setup instructions.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Submitting...' : 'Start Free Trial'}
      </button>
    </form>
  );
}
```

---

### Survey Component:

```typescript
'use client';

import { useState } from 'react';

const SURVEY_QUESTIONS = [
  {
    id: 'platform',
    question: 'Which AI coding platform do you use?',
    type: 'checkbox',
    options: ['Lovable', 'Replit', 'v0.dev', 'Cursor', 'Bolt.new', 'Other'],
  },
  {
    id: 'needs_backend',
    question: 'Do your AI-generated apps need a backend?',
    type: 'radio',
    options: ['Yes, always', 'Yes, sometimes', 'No, just static frontends', 'Not sure yet'],
  },
  {
    id: 'current_deployment',
    question: 'Where do you currently deploy your apps?',
    type: 'radio',
    options: [
      "Don't deploy (just prototypes)",
      'Vercel/Netlify',
      'Railway',
      'Heroku',
      'Self-hosted',
      'Lovable Cloud / Replit',
      'Other',
    ],
  },
  {
    id: 'pricing',
    question: 'What would you pay for a backend platform?',
    type: 'radio',
    options: ['$0 (free only)', '$10-20/month', '$20-50/month', '$50-100/month', '$100+/month'],
  },
  {
    id: 'pain_point',
    question: "What's your biggest challenge deploying AI-generated apps?",
    type: 'textarea',
  },
];

export function Survey() {
  const [responses, setResponses] = useState<Record<string, any>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Submit to Airtable
      await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(responses),
      });

      setIsComplete(true);
    } catch (error) {
      console.error('Survey submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isComplete) {
    return (
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">🎉 Thank you!</h2>
        <p className="text-xl mb-4">Your 50% off code: <code className="bg-green-100 px-3 py-1 rounded">EARLY50</code></p>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg">
          Start Free Trial
        </button>
      </div>
    );
  }

  const question = SURVEY_QUESTIONS[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Question {currentQuestion + 1} of {SURVEY_QUESTIONS.length}</span>
          <span>{Math.round(((currentQuestion + 1) / SURVEY_QUESTIONS.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / SURVEY_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-6">{question.question}</h3>

      {/* Render question based on type */}
      {/* ... (checkbox, radio, textarea implementations) ... */}

      <div className="flex gap-4 mt-8">
        {currentQuestion > 0 && (
          <button
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className="px-6 py-2 border border-gray-300 rounded-lg"
          >
            Back
          </button>
        )}
        {currentQuestion < SURVEY_QUESTIONS.length - 1 ? (
          <button
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg flex-1"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg flex-1"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Survey'}
          </button>
        )}
      </div>
    </div>
  );
}
```

---

## ✅ Acceptance Criteria

Before considering this deliverable complete:

- [ ] 1 landing pages deployed (/ai-coding-agents)
- [ ] Survey embedded and working (5 questions)
- [ ] Email capture integrated 
- [ ] Mobile responsive (tested on iPhone/Android)
- [ ] PageSpeed score 90+ (desktop and mobile)
- [ ] SEO meta tags complete
- [ ] Thank you page with discount code
- [ ] Working on production domain

---

## 🚀 Deployment

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel --prod

# Set environment variables in Vercel dashboard
EMAILOCTOPUS_API_KEY=xxx
AIRTABLE_API_KEY=xxx
GA_MEASUREMENT_ID=G-XXXXXX
```

---

