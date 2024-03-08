import { useEffect,useState } from "react";
import Header from "./Header";

import { useParams } from "react-router-dom";
import Footer from "./Footer";


export default function SingleProduct() {

  const params=useParams()
  console.log(params.productID);

  let [single,setsingle]=useState({});


  // user id from local

  let userID=JSON.parse(localStorage.getItem("medplus_user")).userID;
  // console.log(userID);


  useEffect(function(){
   fetch("http://localhost:8000/product/product/"+params.productID,{
    method:"GET"
   })
   .then(function(response){
    return response.json()
   })
   .then(function(data){
    
    console.log(data)
    if(data.success===true){
       setsingle(data.data)
    }
   })
   .catch(function(err){
    console.log(err);
   })


  },[params.productID])

// another method on the searching when youre already on singleproduct page
  // useEffect(function(){
  //  fetch("http://localhost:8000/product/product/"+params.productID,{
  //   method:"GET"
  //  })
  //  .then(function(response){
  //   return response.json()
  //  })
  //  .then(function(data){
    
  //   console.log(data)
  //   if(data.success===true){
  //      setsingle(data.data)
  //   }
  //  })
  //  .catch(function(err){
  //   console.log(err);
  //  })


  // },[single])


  function AddCart(){
    fetch("http://localhost:8000/product/cart",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({user:userID,product:single._id})
    })
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data);
    })
    .catch(function(err){
      console.log(err)
    })
  }

  return (
    <div className="flex_single">
    <Header/>

    <section className="single_section">
      <div className="single">
        <div className="single_image">
          {
            single.images?.map(function(image,index){
              return(
                <img key={index} src={image} style={{width:"33%",height:"85%"}}/>
              )
            })
          }

        </div>

        <div className="single_details">
          <h3>{single.name}</h3>

          <p style={{fontSize:"12px",margin:"10px 0px"}}>{single.description}</p>

          <ul style={{display:"flex",flexDirection:"column"}}>
            {
              single.tags?.map(function(tag,i){
                return(
                <li style={{fontSize:"12px"}}>{tag}</li>
                  
                )
              })
            }
          </ul>

          <div className="discount_section">
            <p style={{color:"green",fontSize:"14px",fontFamily:"segoe ui"}}>Discount of: {single.discount}% Off</p>

            
              <p style={{color:"red",textDecoration:"line-through"}}>{single.price} -</p>

              <h5 style={{fontSize:"14px"}}><i className="fa-solid fa-cedi-sign"></i>{single.price - (single.discount / 100) * single.price}</h5>
            

          </div>


          <div className="single_buttons">
            <input type="number" defaultValue={1} placeholder="Enter quantity"/>

            <div>
            <button onClick={function(){
              AddCart();
            }}>Add</button>
            <button>Buy</button>

            </div>
            

          </div>


          

        </div>

      </div>

    </section>

    <Footer/>
    </div>
  )
}
