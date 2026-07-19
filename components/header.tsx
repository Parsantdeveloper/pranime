'use client'

import Link from 'next/link'
import { Play } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky bg-background  top-0 z-50">
      <nav className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8  rounded-lg flex items-center justify-center">
            <Play className="w-5 h-5 text-background fill-background" />
          </div>
          <span className="text-xl font-bold text-foreground">AnimeStream</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-foreground hover:text-primary transition">Home</Link>
          <Link href="#" className="text-foreground hover:text-primary transition">Browse</Link>
          <Link href="#" className="text-foreground hover:text-primary transition">Trending</Link>
          <Link href="#" className="text-foreground hover:text-primary transition">Contact</Link>
        </div>

        <button className="px-6 py-2 bg-primary text-background font-semibold rounded-lg hover:bg-opacity-90 transition transform hover:scale-105">
          Sign In
        </button>
      </nav>
    </header>
  )
}
