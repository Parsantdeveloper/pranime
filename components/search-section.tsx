'use client'

import { Search, Filter } from 'lucide-react'
import { useState } from 'react'

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState('')

  const suggestions = [
    'Attack on Titan Season 4',
    'Demon Slayer Season 3',
    'Jujutsu Kaisen 0',
    'Solo Leveling',
    'Wind Breaker',
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground text-center">Find Your Next Favorite Anime</h2>
          
          {/* Search Bar */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search anime titles, characters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>
            <button className="px-4 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-opacity-90 transition flex items-center gap-2">
              <Filter className="w-5 h-5" />
              <span className="hidden sm:inline">Filter</span>
            </button>
          </div>
        </div>

        {/* Suggestions */}
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground px-2">Popular searches:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                className="px-4 py-2 bg-secondary border border-border rounded-full text-sm text-foreground hover:border-primary hover:text-primary transition"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
