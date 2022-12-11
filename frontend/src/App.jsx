import HomePage from './pages/HomePage';
import RoutesOutlet from './pages/RoutesOutlet';
import { Routes, Route } from 'react-router-dom';
import Informasi from './pages/informasi/Informasi';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RoutesOutlet />}>
        <Route index element={<HomePage />} />
        <Route path="informasi" element={<Informasi />} />
        <Route path="tentang" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
