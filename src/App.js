import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Login from './pages/Authentication/Login';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Navbar from './pages/Shared/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { publicRoutes } from './routes/publicRoutes';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoutes.map(({ path, Componotent }, index) => <Route
              key={index}
              path={path} element={<Componotent />}></Route>)
          }
        </Routes>
      </Navbar>

    </div>
  );
}

export default App;
