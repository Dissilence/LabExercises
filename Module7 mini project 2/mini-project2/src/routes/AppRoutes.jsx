import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Animalcrossing from '../pages/Animalcrossing';

function AppRoutes(props) {
  return (
    <Routes>
         <Route path='/home' element={<Home {...props} />} />
         <Route path='/about' element={<About {...props} />} />
         <Route path='/login' element={<Login {...props} />} />
         <Route path='/Animalcrossing' element={<Animalcrossing {...props} />} />
    </Routes>
  );
}

export default AppRoutes;