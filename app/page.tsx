import HeroSection from '@/components/hero-section';
import FeaturedSection from '@/components/featured-section';
import BenefitsSection from '@/components/benefit-section';

export const metadata = {
  title: 'PRAnime - Free Open Source Anime Streaming',
  description: 'Free, open-source anime streaming platform. Stream unlimited anime with no ads. Community-driven and built for anime fans.',
};

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <FeaturedSection />
      <BenefitsSection />
    </main>
  );
}
