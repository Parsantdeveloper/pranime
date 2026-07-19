'use client'

import { GitBranch, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">AnimeStream</h3>
            <p className="text-muted-foreground text-sm">Free and open source anime streaming platform built by the community, for the community.</p>
          </div>

          {/* Browse Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Browse</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition">Popular</a></li>
              <li><a href="#" className="hover:text-primary transition">Trending</a></li>
              <li><a href="#" className="hover:text-primary transition">New Releases</a></li>
              <li><a href="#" className="hover:text-primary transition">Top Rated</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">License</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">&copy; 2024 AnimeStream. Open source project.</p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary border border-border hover:border-primary text-muted-foreground hover:text-primary transition flex items-center justify-center" title="GitHub">
              <GitBranch className="w-5 h-5" />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary border border-border hover:border-primary text-muted-foreground hover:text-primary transition flex items-center justify-center" title="Telegram">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
