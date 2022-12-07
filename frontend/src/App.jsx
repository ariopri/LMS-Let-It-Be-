import HomePage from './pages/HomePage';
import RoutesOutlet from './pages/RoutesOutlet';
import { Routes, Route } from 'react-router-dom';
import DaftarMentor from './components/daftarMentor/DaftarMentor';
import Testimoni from './components/testimoni/Testimoni';
import Faq from './components/faq/Faq';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RoutesOutlet />}>
        <Route index element={<HomePage />} />
        <Route index element={<DaftarMentor />} />
        <Route index element={<Testimoni />} />
        <Route index element={<Faq />} />
      </Route>
    </Routes>
  );
}

export default App;
