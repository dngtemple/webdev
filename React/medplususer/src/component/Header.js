
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';

export default function Header(){

  let [allsearch,setallsearch]=useState([])

  function searchResult(value){
    if(value!==""){

    fetch("http://localhost:8000/product/user_search_products/"+value,{
      method:"GET"
    })
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      console.log(data)
      setallsearch(data.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  else{
    setallsearch([]);
    
  }


  }


  
    return (
      <header className='header_section'>
        <div className='header'>
            <div className='logo_search'>
                <Link to={"/"}>
                  <h4 style={{lineHeight:"30px",marginRight:"40px"}}>MedPLUS</h4>
                </Link>

                <input type='search' placeholder='Type search' onChange={(event)=>{
                  searchResult(event.target.value);
                }}/>


                {
                  allsearch.length!==0 ?(
                    <div className='search_results'>
                       <ul className='search_lists'>
                        {
                          allsearch.map((pro,i)=>{
                            return(
                              <li key={i} className='search_list'>{pro.name}</li>
                            )
                          })
                        }
                       </ul>

                   </div>

                  ):null
                }

                

            </div>

            



            <div className='logout'>
                <i className='fa-solid fa-cart-shopping' style={{marginRight:"20px"}}></i>

                <i className='fa-solid fa-user'></i>
                
                <Link to={"/login"}>
                 <h5>Login / Register</h5>  
                </Link>

            </div>

        </div>

      </header>
    )
  
}
