
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import Login from './component/Login';
import Signup from './component/Signup';
import Footer from './component/Footer';
import About from './component/About';
import Header from './component/Header';
import Banner from './component/Banner';
import Products from './component/Products';



function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/footer' element={<Footer/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/header' element={<Header/>}></Route>
          <Route path='/banner' element={<Banner/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
