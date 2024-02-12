
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AdminLogin from './pages/adminLogin';
import Admindash from './pages/admindash';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>
        <Route path="/admindash" element={<Admindash/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
