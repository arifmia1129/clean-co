import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';


function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Navbar>

    </div>
  );
}

export default App;
