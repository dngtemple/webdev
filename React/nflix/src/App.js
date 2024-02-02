
import './App.css';


// route
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Protect from './components/Protect';
import Player from './pages/Player';




function App() {
  return (
    <div className="App">



      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='homepage' element={
            <Protect>
              <Homepage/>
            </Protect>
          }></Route>
          <Route path='/player/:id' element={
            <Protect>
              <Player/>
            </Protect>
          }></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
