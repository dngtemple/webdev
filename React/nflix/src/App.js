
import './App.css';


// route
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';



function App() {
  return (
    <div className="App">



      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='homepage' element={<Homepage/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
