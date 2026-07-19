'use client';

import { Star, Play } from 'lucide-react';

interface FeaturedAnime {
  id: number;
  title: string;
  genre: string;
  rating: number;
  episodes: number;
  description: string;
}

const featuredAnimes: FeaturedAnime[] = [
  {
    id: 1,
    title: 'Jujutsu Kaisen',
    genre: 'Action / Dark Fantasy',
    rating: 4.9,
    episodes: 47,
    description: 'A boy swallows a cursed talisman and joins a secret organization of sorcerers.',
  },
  {
    id: 2,
    title: 'Solo Leveling',
    genre: 'Action / Adventure',
    rating: 4.8,
    episodes: 12,
    description: 'The weakest hunter in the world gains the power to become the strongest.',
  },
  {
    id: 3,
    title: 'Attack on Titan',
    genre: 'Dark Fantasy',
    rating: 4.7,
    episodes: 139,
    description: 'Humanity fights for survival against colossal humanoid creatures.',
  },
];

export default function FeaturedSection() {
  return (
    <section className="relative bg-background py-12 md:py-20 px-4 md:px-8">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 400">
          <defs>
            <pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1200" height="400" fill="url(#grid2)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-8 bg-accent rounded" />
            <p className="text-accent font-bold tracking-widest">TRENDING NOW</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Featured <span className="text-accent">Releases</span>
          </h2>
        </div>

        {/* Featured grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredAnimes.map((anime) => (
            <div
              key={anime.id}
              className="group relative bg-card border border-border rounded overflow-hidden hover:border-accent transition-all cursor-pointer"
            >
              {/* Placeholder image area */}
              <div className="relative w-full h-56 bg-gradient-to-b from-accent/10 to-transparent flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded border border-accent/30 group-hover:border-accent group-hover:bg-accent/10 transition-all">
                    <Play className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground leading-tight flex-1">{anime.title}</h3>
                </div>

                <p className="text-sm text-accent font-semibold mb-2">{anime.genre}</p>

                <p className="text-sm text-muted mb-4 line-clamp-2">{anime.description}</p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(anime.rating)
                            ? 'fill-accent text-accent'
                            : 'text-border'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-muted ml-2">{anime.rating}</span>
                  </div>
                  <span className="text-xs text-muted">{anime.episodes} eps</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 border border-accent text-accent font-bold rounded hover:bg-accent hover:text-black transition-all">
            Explore All Anime
          </button>
        </div>
      </div>
    </section>
  );
}
