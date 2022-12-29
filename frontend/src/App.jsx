import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/01-LandingPage/LandingPage';
import RoutesOutlet from './config/RoutesOutlet';
import About from './pages/06-About/About';
import HubungiKami from './pages/04-Hubungi/HubungiKami';
import CaraMendafatarPengajar from './pages/07-DaftarPengajar/CaraDaftarPengajar';
import Login from './pages/02-Login/Login';
import Register from './pages/03-Register/Daftar';
import Informasi from './pages/05-Informasi/Informasi';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RoutesOutlet />}>
        <Route index element={<LandingPage />} />
        <Route path="informasi" element={<Informasi />} />
        <Route path="tentang" element={<About />} />
        <Route path="hubungi" element={<HubungiKami />} />
        <Route
          path="cara_mendaftar_instruktur"
          element={<CaraMendafatarPengajar />}
        />
        <Route path="masuk" element={<Login />} />
        <Route path="mendaftar" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
