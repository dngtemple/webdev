import React, { Component } from 'react'

export default class Header extends Component {
 

  searchResult=(value)=>{
    fetch("http://localhost:8000/product/user_search_products/"+value,{
      method:"GET"
    })
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
      console.log(err);
    })

  }


  render() {
    return (
      <header className='header_section'>
        <div className='header'>
            <div className='logo_search'>
                <h4 style={{lineHeight:"30px",marginRight:"40px"}}>MedPLUS</h4>

                <input type='search' placeholder='Type search' onChange={(event)=>{
                  this.searchResult(event.target.value);
                }}/>

            </div>



            <div className='logout'>
                <i className='fa-solid fa-cart-shopping' style={{marginRight:"20px"}}></i>

                <i className='fa-solid fa-user'></i>

                <h5>Login / Register</h5>

            </div>

        </div>

      </header>
    )
  }
}
