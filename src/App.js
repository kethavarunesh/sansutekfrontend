
import './App.css';
// import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home1 from './Pages/Home1';
import About1 from './Pages/About1';
import Services1 from './Pages/Services1';
import Careers1 from './Pages/Careers1';
import Contactus1 from './Pages/Contactus1';


function App() {
  return (
    <div>
    
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home1/>}/>
    <Route path='/about' element={<About1/>}/>
    <Route path='/service' element={<Services1/>}/>
    <Route path='/careers' element={<Careers1/>}/>
    <Route path='/contact' element={<Contactus1/>}/>
  </Routes>
  </BrowserRouter>
  
  </div>

  );
}

export default App;
