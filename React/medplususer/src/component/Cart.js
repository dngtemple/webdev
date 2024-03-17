import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import Ourproducts from "./Ourproducts";


export default function Cart() {

  let userID=JSON.parse(localStorage.getItem("medplus_user")).userID;

  let [allcartproducts,setallcartproducts]=useState();


  useEffect(function(){
    fetch("http://localhost:8000/product/get_cart_data/"+userID,{
        method:"GET"
    })
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data);

      if(data.success===true){
        let products=data.data.map(function(p,i){
            return p.product
        })

        setallcartproducts({title:"cart",products:products});

      }
    })
    .catch(function(err){
      console.log(err)
    })
  },[])

  return (

    <>
    <Header/>

    {/* <Ourproducts name={"Cart"}/> */}

       <Products products={allcartproducts}/>

    <Footer/>

    </>

  )
}
