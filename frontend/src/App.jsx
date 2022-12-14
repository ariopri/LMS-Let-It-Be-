import HomePage from './pages/HomePage';
import RoutesOutlet from './pages/RoutesOutlet';
import { Routes, Route } from 'react-router-dom';
import Informasi from './pages/informasi/Informasi';
import About from './pages/About';
import HubungiKami from './pages/hubungi/HubungiKami';
import CaraMendafatarPengajar from './pages/CaraDaftarPengajar';
import Login from './pages/login/Login';
import Daftar from './pages/register/Daftar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RoutesOutlet />}>
        <Route index element={<HomePage />} />
        <Route path="informasi" element={<Informasi />} />
        <Route path="tentang" element={<About />} />
        <Route path="hubungi" element={<HubungiKami />} />
        <Route
          path="cara_mendaftar_instruktur"
          element={<CaraMendafatarPengajar />}
        />
        <Route path="masuk" element={<Login />} />
        <Route path="mendaftar" element={<Daftar />} />
        <Route path="register" element={<Daftar />} />
      </Route>
    </Routes>
  );
}

export default App;
