import React from 'react';
import HeroSection from '../Components/HeroSection';
import StatsSection from '../Components/StatsSection';
import CategorySection from '../Components/CategorySection';
import FeaturedProducts from '../Components/FeaturedProducts';
import FeaturesSection from '../Components/FeaturesSection';

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <StatsSection />
      <CategorySection />
      <FeaturedProducts />
      <FeaturesSection />
    </main>
  );
};

export default Home;