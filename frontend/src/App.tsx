import FeaturesCard from "./components/FeatureCard";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <FeaturesCard />
    </div>
  );
}

export default App;
