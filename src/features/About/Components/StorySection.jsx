import React from 'react';

const StorySection = () => {
  return (
    <div className="px-4 mb-16">
      <div className="border border-[#333333] rounded-3xl p-8 md:p-12 bg-transparent">
        <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
        <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
          <p>
            SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves: 
            <span className="text-white italic"> "Why can't online shopping be simple, fast, and fair?"</span>
          </p>
          <p>
            Since then, we've grown into a global platform serving thousands of customers daily. Despite our rapid growth, our core mission remains unchanged: delivering exceptional products with an unmatched user experience. We believe that technology should empower consumers, offering transparency and reliability at every step of the journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
