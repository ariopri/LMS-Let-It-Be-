import React from 'react';
import DaftarMentor from '../components/daftarMentor/DaftarMentor';
import Features from '../components/feature/Features';
import Hero from '../components/hero/Hero';
import Testimonials from '../components/testimoni/Testimoni';
import Faq from '../components/faq/Faq';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <DaftarMentor />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default HomePage;
