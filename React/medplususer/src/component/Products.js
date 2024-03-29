import { useState,useEffect, useRef } from "react";
import { Link,  } from "react-router-dom";





export default function Products(props){

  let [products,setproducts]=useState(props.products.products);

  let [totalprice,settotalprice]=useState();

  let [ordermodal,setordermodal]=useState(false);

  let [taxes,settaxes]=useState();
  

  let [withTaxes,setwithTaxes]=useState(0);

  
  let user=useRef({})

  function readValue(property,value){
    user.current["amount"]=withTaxes*100;
    user.current[property]=value;
  
  }


  function pay(){
    fetch("http://localhost:8000/payment/paystack",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(user.current)
    })
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data);

      if(data.success===true){
        let info=JSON.parse(data.data);

      let url =info.data.authorization_url;

      window.open(url,"_blank");

      setordermodal(false);
      }
      
    })
    .catch(function(err){
      console.log(err);
    })
  }



  useEffect(function(){

    let price=0;

    products.forEach(function(product,index){
      price+=product.price*product.quantity;
    })
    settotalprice(price.toFixed(2));
    settaxes(((2/100)*price).toFixed(2));

    setwithTaxes(Math.round((Number(taxes)+Number(totalprice))));

  },[products,totalprice,taxes])


  function removeFromCart(id){
    console.log(id);
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

        console.log(index)

        tempData.splice(index,1);

        setproducts(tempData)
      }
    })
    .catch(function(err){
      console.log(err);
    })
  }


    // console.log("Products:",props.products);
    return (

      <>

      {
        ordermodal===true?(
          <div className="order_section_modal" onClick={function(){
            setordermodal(false);
          }}>
            <div className="order_modal" onClick={function(event){
               event.stopPropagation();
            }}>

              <p style={{fontSize:"18px",marginBottom:"20px"}}>Your Order Summary</p>


              <div style={{display:"flex",justifyContent:"space-between"}}>

              

              <table className="table table-striped table-hover">
                <thead>
                  <tr className="first_tr">
                    <th>#</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    products.map(function(product,index){
                      return(
                        <tr>
                          <td>{index+1}</td>
                          <td>{product.name}</td>
                          <td>{product.quantity}</td>
                          <td>{Number(product.price.toFixed(2))*Number(product.quantity)}</td>
                        </tr>
                      )
                    })
                  }

                  <tr>
                    
                    
                    <td colSpan={3}>Taxes (2%)</td>
                    <td>{taxes}</td>
                  </tr>

                  <tr>
                    
                  </tr>

                  <tr>

                    <td colSpan={3}>Total</td>

                    <td><i className="fa-solid fa-cedi-sign"></i>{Math.round(Number(taxes)+Number(totalprice))}</td>
                  </tr>
                </tbody>
              </table>


              <div style={{width:"35%"}}>
    
                <form style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                <h6 style={{margin:"10px 0px"}}>Please fill the form with correct information</h6>
                <input type="text" placeholder="Enter Firstname" onChange={function(event){
                  readValue("firstname",event.target.value);
                }}/>
                <input type="text" placeholder="Enter Lastname" onChange={function(event){
                  readValue("lastname",event.target.value);
                }}/>
                <input type="email" placeholder="Enter Email" onChange={function(event){
                  readValue("email",event.target.value);
                }}/>
                <input type="number" placeholder="Enter contact"/>
                <input type="text" placeholder="Enter Address"/>

                <button type="button" onClick={function(){
                  pay()
                }} className="address_button">Buy</button>
                </form>

              </div>

              

              </div>


              <hr style={{marginTop:"30px"}}></hr>
    
            </div>
  
          </div>

        ):null
      }

      
      

      <section className='products_section'>
        <div className='products'>
             <div className='product_head'>
                <h3 style={{fontSize:"19px"}}>{props.products && props.products.title}</h3>
    

                {
                  props && props.cart===true?(

                    <div className="order_total">
                      <p>Total Price :<i className="fa-solid fa-cedi-sign"></i>{totalprice}</p>


                      <button onClick={function(){
                        setordermodal(true)
                      }}>
                      Proceed to buy
                      </button>

                    </div>
                   
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
                          {p.price.toFixed(2)}
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
      </>
    )
  
}
