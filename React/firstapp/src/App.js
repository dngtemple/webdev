
import './App.css';

import Product from './products';
import Demo from './demo';
import Login from './login';


// routing in react
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

function App() {

  let name="Clinton Templeton";
  
  let user={
    name:"Alves",
    age:20,
  }

  let students=["John","Kofi","Ama","Kwabena"];

  let teachers=[
    {
      name:"Samuel",
      level:200,
    },
    {
      name:"Daniel",
      level:100,
    },
    {
      name:"Derrick",
      level:300
    }
  ]
  return (
    <div className="App">

      <h1>{name}</h1>

      <p>{user.name} {user.age}</p>

      <p>{students[0]} {students[1]} {students[2]} {students[3]}</p>


      {
        teachers.map(function(teacher,index){
          return(
            <p key={index}>{teacher.name} {teacher.level}</p>
          )
        })
      }


      <div className="container">
        <Product name="Mango" price="$4000" para="This is a friut" src="https://images.pexels.com/photos/39303/mango-tropical-fruit-juicy-sweet-39303.jpeg?auto=compress&cs=tinysrgb&w=400"/>

        <Product name="Laptop" price="$3900" para="This is an electronic device" src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400"/>
        
        <Product name="Pencil" price="$30" para="This is a writing tool" src="https://images.pexels.com/photos/114119/pexels-photo-114119.jpeg?auto=compress&cs=tinysrgb&w=400"/>
        
        <Product name="Water" price="$100" para="This is food" src="https://images.pexels.com/photos/933701/pexels-photo-933701.jpeg?auto=compress&cs=tinysrgb&w=400"/>

      </div>


      {/* <Demo/> */}

      {/* <Login/> */}


      <BrowserRouter>

        <ul>
          <li>
            <Link to="/demo">demo</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>

         <Routes>
         {/* this makes a component loads on default or on the root */}
          <Route path='/' element={<Login/>}></Route>  


          <Route path='/login' element={<Login/>}></Route>
          <Route path='/demo' element={<Demo/>}></Route>
         </Routes>
      </BrowserRouter>


    </div>

  );
}

export default App;
