/* eslint-disable react/react-in-jsx-scope */
import Faq from './components/faq/Faq';
import Features from './components/feature/Features';
import Hero from './components/hero/Hero';
import NavigationBar from './components/navigationBar/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Features />
      <Faq />
    </>
  );
}

export default App;
