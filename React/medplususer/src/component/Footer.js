import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer_section'>
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
                    <li>Products</li>
                    <li>About</li>
                    <li>Home</li>
                </ul>

                <ul>
                    <li style={{fontWeight:"bold"}}>Support</li>
                    <li>Help Center</li>
                    <li>Contact Us</li>
                    <li>Sitemap</li>
                </ul>

                <div>
                <i class="fa-brands fa-instagram" style={{color:"red"}}></i>
                <i class="fa-solid fa-x" style={{color:"black"}}></i>
                <i class="fa-brands fa-facebook" style={{color:"blue"}}></i>
                <i class="fa-brands fa-linkedin" style={{color:"blue"}}></i>
                <i class="fa-brands fa-pinterest" style={{color:"red"}}></i>

                <p style={{fontSize:"13px",marginTop:"5px"}}>
                <i class="fa-solid fa-envelope"></i>medplus@support.com
                </p>

                <p style={{fontSize:"13px",marginTop:"5px"}}>
                <i class="fa-solid fa-phone"></i>
                +233 277 111 222
                </p>
                </div>

            </div>

        </div>
      </div>
    )
  }
}
