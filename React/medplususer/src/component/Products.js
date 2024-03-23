import { useState,useEffect } from "react";
import { Link } from "react-router-dom";



export default function Products(props){

  let [products,setproducts]=useState(props.products.products)


  function removeFromCart(id){
    fetch("http://localhost:8000/product/cart/"+id,{
      method:"DELETE"
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      if(data.success===true){
        let tempData=[...products];

        let index=tempData.findIndex(function(a,i){
          return id === a._id
        })

        tempData.splice(index,1);

        setproducts(tempData)
      }
    })
    .catch(function(err){
      console.log(err);
    })
  }

    console.log("Products:",props.products);
    return (
      

      <section className='products_section'>
        <div className='products'>
             <div className='product_head'>
                <h3 style={{fontSize:"19px"}}>{props.products && props.products.title}</h3>
    

                {
                  props && props.cart===true?(
                    <button>
                      Proceed to buy
                    </button>
                  ):
                  <button>
                    View all
                  </button>
                }
                
            </div>

           
            <div className='product'>
            {
                products.map((p,i)=>{
                  return(
                        // <Link to={"/products/"+p._id}>

                    <div key={i} className='pro'>
                      <div style={{height:"100%",width:"100%",position:"absolute",}}>
                        <img src={p.images[0]} style={{height:"100%",width:"100%"}}/>

                      </div>

                      <div className="prod_details">

                        <h5>{p.name}</h5>

                        <p>
                          <i className="fa-solid fa-cedi-sign"></i>
                          {p.price}
                        </p>
                        
                        

                          {
                            props && props.cart===false?(
                              <Link to={"/products/"+p._id}>
                              <div>View more</div>
                              </Link>
                            ):
                            <div style={{marginLeft:"-4%"}} onClick={function(){
                              removeFromCart(p.cartID);
                            }}>Remove</div>
                          }
                        

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
