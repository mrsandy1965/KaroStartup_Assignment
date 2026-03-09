import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import WhoCanApply from '../components/WhoCanApply';
import Investors from '../components/Investors';
import FeaturedStartups from '../components/FeaturedStartups';
import AboutKaroStartup from '../components/AboutKaroStartup';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <HowItWorks />
      <WhoCanApply />
      <Investors />
      <FeaturedStartups />
      <AboutKaroStartup />
      <CTASection />
    </main>
  );
};

export default Home;
