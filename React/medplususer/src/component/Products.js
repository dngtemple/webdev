import React, { Component } from 'react'

export default class Products extends Component {

  render() {

    console.log("Products:", this.props.products);
    return (
      <section className='products_section'>
        <div className='products'>
             <div className='product_head'>
                <h5>{this.props.products &&this.props.products.title}</h5>

                <button>
                    View all
                </button>

            </div>
            <div className='product'>
            {
                this.props.products && this.props.products.products && this.props.products.products.map((p,i)=>{
                  return(
                    <div key={i} className='pro'>
                        <img  src={p.images[0]}/>

                        <h5 style={{textAlign:"center"}}>{p.name} - 
                        <i className="fa-solid fa-cedi-sign"> </i>
                         <span>{p.price}</span>
                        </h5>

                        <div style={{width:"100%",display:"flex",alignSelf:"flex-end"}}>
                          <button style={{width:"50%",height:"25px",outline:"none"}}>
                            <i className='fa-solid fa-minus'></i>
                          </button>

                          {/* <div style={{width:"40%"}}>Add</div> */}

                          <button style={{width:"50%",height:"25px",outline:"none"}}>
                          <i className='fa-solid fa-plus'></i>

                          </button>
                          
                        </div>

                        

                    </div>
                  )
                })
            }

        </div>
            

        </div>

      </section>
    )
  }
}
