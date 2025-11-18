'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function SocialProof() {
  const testimonials = [
    {
      quote: "SashiDo made deploying my Lovable app effortless. I went from prototype to production in under 5 minutes.",
      author: "Alex M.",
      role: "Indie Hacker"
    },
    {
      quote: "Finally, a Parse Server host that understands European compliance. Perfect for our healthcare app.",
      author: "Sarah L.",
      role: "CTO, MedTech Startup"
    }
  ]

  const logos = [
    { name: 'Product Hunt', src: '/images/logos/product-hunt.png', alt: 'Product Hunt', url: 'https://www.producthunt.com' },
    { name: 'LA County', src: '/images/logos/la-county.png', alt: 'LA County', url: 'https://lacounty.gov' },
    { name: 'Cirque du Soleil', src: '/images/logos/cirque-du-soleil.png', alt: 'Cirque du Soleil', url: 'https://www.cirquedusoleil.com' },
    { name: 'USGA', src: '/images/logos/usga.png', alt: 'USGA', url: 'https://www.usga.org' },
    { name: 'LPGA', src: '/images/logos/lpga.png', alt: 'LPGA', url: 'https://www.lpga.com' }
  ]

  return (
    <section className="section-container bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="text-4xl text-primary mb-4">"</div>
              <p className="text-lg text-gray-300 mb-6 italic">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-blue-100">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By Logos */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-wide text-gray-400 font-semibold mb-8">
            Trusted by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <Link
              key={index}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

