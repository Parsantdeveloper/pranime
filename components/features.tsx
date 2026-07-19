'use client'

import { Zap, Smartphone, Settings, Heart } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Lightning Fast Streaming',
    description: 'HD and 4K quality with zero buffering. Optimized servers worldwide.',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Watch Anywhere',
    description: 'Stream on all devices - phone, tablet, laptop, or TV. Your watchlist syncs everywhere.',
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Fully Customizable',
    description: 'Choose your subtitles, audio language, and video quality. Personalize your experience.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Community Driven',
    description: 'Open source and ad-free. Built by anime fans, for anime fans worldwide.',
  },
]

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            The Anime Streaming Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafted by the community, powered by passion for anime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-lg bg-secondary border border-border hover:border-primary transition duration-300 space-y-4"
            >
              {/* Icon container */}
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:text-accent group-hover:scale-110 transition duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
