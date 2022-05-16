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

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Navbar>

    </div>
  );
}

export default App;
