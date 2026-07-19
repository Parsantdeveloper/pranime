'use client';

import { Search, Play, Zap } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent pointer-events-none" />
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative accent elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 md:px-8 md:py-0">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted">New episodes every week</span>
        </div>

        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-black text-center">
            <span className="text-white">PR</span>
            <span className="text-accent">ANIME</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-center text-muted max-w-2xl mb-4">
          Free & Open Source Anime Streaming Platform
        </p>
        <p className="text-sm md:text-base text-center text-muted/70 max-w-2xl mb-12">
          Stream unlimited anime, discover new series, and join a community of passionate fans
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none" />
            <input
              type="text"
              placeholder="Search anime, genres, or characters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card border border-border rounded px-4 py-4 pl-12 text-foreground placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
            />
          </div>
        </div>

        {/* Popular searches */}
        <div className="text-center mb-12">
          <p className="text-sm text-muted mb-4">Popular: </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['One Piece', 'Jujutsu Kaisen', 'Attack on Titan', 'My Hero Academia'].map((anime) => (
              <button
                key={anime}
                className="px-4 py-2 bg-card border border-border rounded hover:border-accent text-sm text-foreground transition-colors"
              >
                {anime}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="px-8 py-4 bg-accent text-black font-bold rounded hover:bg-accent/90 transition-all flex items-center justify-center gap-2 group">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Start Watching
          </button>
          <button className="px-8 py-4 border border-foreground text-foreground font-bold rounded hover:bg-foreground hover:text-black transition-all">
            Browse Collection
          </button>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-center">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-accent">100% Free</p>
            <p className="text-xs md:text-sm text-muted mt-2">No Subscription</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-accent">Open Source</p>
            <p className="text-xs md:text-sm text-muted mt-2">Community Driven</p>
          </div>
        </div>
      </div>

      {/* Floating anime cards indicator */}
      <div className="absolute bottom-8 left-8 right-8 z-0 opacity-30">
        <div className="flex gap-4 justify-center">
          <div className="w-16 h-24 bg-card border border-border rounded" />
          <div className="w-16 h-24 bg-card border border-border rounded" />
          <div className="w-16 h-24 bg-card border border-border rounded" />
        </div>
      </div>
    </section>
  );
}
