
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AdminLogin from './pages/adminLogin';
import Admindash from './pages/admindash';
import Createproduct from './pages/createproduct';
import Viewproduct from './pages/viewproduct';
import VendorRegistration from './pages/vendor_reg';
import VendorLogin from './pages/vendorLogin';
import VendorDashboard from './pages/vendordash';
import ViewVendors from './pages/allVendors';
import VendorSelectProducts from './pages/ven_select_pro';


function App() {
  return (

    <BrowserRouter>
      <Routes>

        {/* routes for adming */}
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>

        <Route path="/admindash" element={<Admindash/>}>
          <Route path='/admindash/create' element={<Createproduct/>}></Route>
          <Route path='/admindash/view' element={<Viewproduct/>}></Route>
          <Route path='/admindash/vendors' element={<ViewVendors/>}></Route>

        </Route>


        {/* routes for vendor */}
        <Route path="/vendorRegister" element={<VendorRegistration/>}></Route>
        <Route path="/vendorLogin" element={<VendorLogin/>}></Route>
        <Route path="/vendordash" element={<VendorDashboard/>}>
            <Route path='/vendordash/create' element={<Createproduct/>}></Route>

            <Route path='/vendordash/select' element={<VendorSelectProducts/>}></Route>
        </Route>

        


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
