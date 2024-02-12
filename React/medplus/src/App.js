
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AdminLogin from './pages/adminLogin';
import Admindash from './pages/admindash';
import Createproduct from './pages/createproduct';
import Viewproduct from './pages/viewproduct';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>

        <Route path="/admindash" element={<Admindash/>}>
          <Route path='/admindash/create' element={<Createproduct/>}></Route>
          <Route path='/admindash/view' element={<Viewproduct/>}></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
