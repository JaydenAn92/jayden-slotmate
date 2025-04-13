import React from 'react';
import HeroSection from '@/components/organisms/HeroSection';
import AboutSection from '@/components/organisms/AboutSection';
import Timeline from '@/components/organisms/Timeline';
import TechStackCard from '@/components/molecules/TechStackCard';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-24">
      <HeroSection />
      <TechStackCard />
      <AboutSection />
      <Timeline items={[]} /> {/* Add your timeline items here */}
    </div>
  );
};

export default HomePage;
