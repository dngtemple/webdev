import React, { Component } from 'react'

export default class Footer extends Component {

 

  render() {
    return (
      <footer className='footer_section'>
        <div className='footer'>
            <div className='foot'>

                <ul>
                    <li style={{fontWeight:"bold"}}>Terms & Policy</li>
                    <li>Editorial policy</li>
                    <li>Privacy policy</li>
                    <li>Terms Of use</li>
                    <li>Advertising policy</li>
                </ul>

                <ul >
                    <li style={{fontWeight:"bold"}}>Quick Access</li>
                    <li>Cart</li>
                    <li onClick={()=>{
                      window.scrollTo({
                        top:800,
                        behavior:'smooth'
                      });
                    }}>Products</li>
                    <li onClick={()=>{
                      window.scrollTo({
                        top:500,
                        behavior:'smooth'
                      });

                    }}>About</li>

                  
                    <li onClick={()=>{
                      window.scrollTo({
                        top:0,
                        behavior:'smooth'
                      });
                    }}>Home</li>
                </ul>

                <ul>
                    <li style={{fontWeight:"bold"}}>Support</li>
                    <li>Help Center</li>
                    <li>Contact Us</li>
                    <li>Sitemap</li>
                </ul>

                <div>
                <i className="fa-brands fa-instagram" style={{color:"red"}}></i>
                <i className="fa-brands fa-facebook" style={{color:"blue"}}></i>
                <i className="fa-brands fa-linkedin" style={{color:"blue"}}></i>
                <i className="fa-brands fa-pinterest" style={{color:"red"}}></i>

                <p style={{fontSize:"13px",marginTop:"5px"}}>
                <i className="fa-solid fa-envelope"></i> medplus@support.com
                </p>

                <p style={{fontSize:"13px",marginTop:"5px"}}>
                <i className="fa-solid fa-phone"></i> 
                +233 277 111 222
                </p>

                <p style={{fontSize:"13px",marginTop:"5px"}}>
                <i className="fa-solid fa-phone"></i> 
                +233 277 333 444
                </p>
                </div>

            </div>

        </div>
      </footer>
    )
  }
}
