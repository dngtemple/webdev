import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className='about_section'>
        <div className='about_details'> 
            <h3 style={{textAlign:"center"}}>About Us</h3>

            <p style={{padding:" 20px 80px", fontSize:"12px",textAlign:"center"}}>
            At Medplus, we're dedicated to providing exceptional 
            healthcare services and products to our community. With a
            focus on customer care and health outcomes, our
             experienced
            team is committed to delivering personalized solutions to
            meet each individual's needs. Whether it's expert medication
            advice, wellness consultations, or access to a wide range of
            pharmaceuticals and healthcare products, we strive to be your
                  trusted partner in health. Your well-being
                   is our priority."
            </p>

            <div className='about_icons'>
                <div className='about'>
                <i class="fa-solid fa-person-dots-from-line"></i>

                <p>Diagnosis</p>

                </div>

                <div className='about'>
                <i class="fa-solid fa-bolt"></i>
                
                <p>Pharmacy</p>

                </div>

                <div className='about'>
                <i class="fa-solid fa-virus-slash"></i>

                <p>Treatment</p>

                </div>

                <div className='about'>
                <i class="fa-solid fa-prescription-bottle-medical"></i>

                <p>Energy</p>

                </div>
                <div className='about'>
                <i class="fa-solid fa-microscope"></i>

                <p>Testing</p>

                </div>

            </div>

        </div>

       
      </div>
    )
  }
}
