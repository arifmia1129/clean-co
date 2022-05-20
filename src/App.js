import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Shared/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { publicRoutes } from './routes/publicRoutes';
import PrivateRoute from './authentication/PrivateRoute';
import { privateRoutes } from './routes/privateRoutes';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoutes.map(({ path, Component }, index) => <Route
              key={index}
              path={path} element={<Component />}></Route>)
          }

          <Route element={<PrivateRoute />}>
            {
              privateRoutes.map(({ path, Component }, index) => <Route
                key={index}
                path={path} element={<Component />}></Route>)
            }
          </Route>
        </Routes>
      </Navbar>

    </div>
  );
}

export default App;
