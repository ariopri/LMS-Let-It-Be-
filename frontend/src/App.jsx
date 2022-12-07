/* eslint-disable react/react-in-jsx-scope */
import DaftarMentor from './components/daftarMentor/DaftarMentor';
import Features from './components/feature/Features';
import Hero from './components/hero/Hero';
import NavigationBar from './components/navigationBar/NavigationBar';
import Testimonials from './components/testimoni/Testimoni';
import Faq from './components/faq/Faq';

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Features />
      <DaftarMentor />
      <Testimonials />
       <Faq />
    </>
  );
}

export default App;
