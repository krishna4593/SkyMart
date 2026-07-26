import React from 'react';
import AboutHero from '../Components/AboutHero';
import AboutStats from '../Components/AboutStats';
import StorySection from '../Components/StorySection';
import ValuesSection from '../Components/ValuesSection';
import TeamSection from '../Components/TeamSection';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <AboutHero />
      <AboutStats />
      <StorySection />
      <ValuesSection />
      <TeamSection />
    </div>
  );
};

export default About;