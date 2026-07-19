'use client';

import { Code2, Users, Zap, Lock } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Open Source',
    description: 'Fully open source code hosted on GitHub. Contribute and make it better.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community Driven',
    description: 'Built by the community, for the community of anime lovers everywhere.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Lightning Fast',
    description: 'Stream HD anime without buffering. Optimized for smooth playback.',
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'Privacy First',
    description: 'Your privacy is protected. No ads, no tracking, just pure anime.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative bg-background py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-1 h-8 bg-accent rounded" />
            <p className="text-accent font-bold tracking-widest text-sm md:text-base">ABOUT PRANIME</p>
            <div className="w-1 h-8 bg-accent rounded" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Free & <span className="text-accent">Open Source</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto">
            PRAnime is a free, open-source anime streaming platform built by passionate fans for the anime community.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 bg-card border border-border rounded hover:border-accent transition-all hover:bg-card/80"
            >
              {/* Accent border on hover */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded pointer-events-none" />

              {/* Icon */}
              <div className="relative z-10 mb-4 md:mb-6 inline-flex items-center justify-center w-12 md:w-14 h-12 md:h-14 bg-accent/10 rounded text-accent group-hover:bg-accent group-hover:text-black transition-all">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="relative z-10 text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
