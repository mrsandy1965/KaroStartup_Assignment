import React from 'react';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import SuccessStories from '../components/SuccessStories';
import EventHighlights from '../components/EventHighlights';
import WhoCanApply from '../components/WhoCanApply';
import Investors from '../components/Investors';
import FeaturedStartups from '../components/FeaturedStartups';
import Testimonials from '../components/Testimonials';
import AboutKaroStartup from '../components/AboutKaroStartup';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <main>
      <Hero />
      <TrustSection />
      <About />
      <HowItWorks />
      <SuccessStories />
      <EventHighlights />
      <WhoCanApply />
      <Investors />
      <FeaturedStartups />
      <Testimonials />
      <AboutKaroStartup />
      <CTASection />
    </main>
  );
};

export default Home;
