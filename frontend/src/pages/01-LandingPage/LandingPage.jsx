import React from 'react';
import DaftarMentor from '../../components/02-C.LandingPage/daftarMentor/DaftarMentor';
import Features from '../../components/02-C.LandingPage/feature/Features';
import Hero from '../../components/02-C.LandingPage/hero/Hero';
import Testimonials from '../../components/02-C.LandingPage/testimoni/Testimoni';
import Faq from '../../components/02-C.LandingPage/faq/Faq';

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
