
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Banner from "./Banner";
import Products from "./Products";
import { useState,useEffect } from "react";
import Ourproducts from "./Ourproducts";
import Leader from "./Leader";
import Gallery from "./Gallery";



function Homepage(){
  let [product_1,setproduct_1]=useState();
  let [product_2,setproduct_2]=useState();
  let [product_3,setproduct_3]=useState();
  let [product_4,setproduct_4]=useState();


  useEffect(function(){
    fetch("http://localhost:8000/product/users/products",{
        method:"GET",
    })
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      console.log(data);

      setproduct_1(data.product_1);
      setproduct_2(data.product_2);
      setproduct_3(data.product_3);
      setproduct_4(data.product_4);

    })
    .catch((err)=>{
      console.log(err);
    })
  },[])


    return (
      <>
      
      <Header/>
      <Banner/>

      {/* this about is for our services */}
      <About/>  

      <Ourproducts name={"Our Products"}/>
      <Products products={product_1} cart={false}/>
      <Products products={product_2} cart={false}/>
      <Products products={product_3} cart={false}/>
      <Products products={product_4} cart={false}/>
       
      <Ourproducts name={"Our Leadership"}/>
      <Leader/>

      <Gallery/>
      <Footer/>

      </>
    )
}

export default Homepage;