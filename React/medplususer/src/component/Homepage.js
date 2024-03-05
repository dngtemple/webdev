
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Banner from "./Banner";
import CategoryHeader from "./CategoryHeader";
import Products from "./Products";
import { useState,useEffect } from "react";


function Homepage(){
  let [product_1,setproduct_1]=useState();
  let [product_2,setproduct_2]=useState();
  let [product_3,setproduct_3]=useState();


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

    })
    .catch((err)=>{
      console.log(err);
    })
  },[])


    return (
      <>
      
      <Header/>
      <Banner/>
      <Products products={product_1}/>
      <Products products={product_2}/>
      <Products products={product_3}/>
      <CategoryHeader/>
      <About/>
      <Footer/>

      </>
    )
}

export default Homepage;