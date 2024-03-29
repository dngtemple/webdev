import { useRef, useState } from "react";

import path from "../path.json";


function VendorSelectProducts(){


    let [selectproductvisible,setselectproductvisible]=useState(false);
    let [searchResults,setsearchResults]=useState([]);

    let selected_product_name=useRef();

    let vendorProduct=useRef({});
    let vendorID=JSON.parse(localStorage.getItem("vendor_info")).vendorID;
    
    vendorProduct.current['vendor']=vendorID;


    function searchProducts(value){
        if(value !==""){

            fetch(path.BASE_URL+path.VENDOR_SEARCH_PRODUCT+value,{
                method:'GET'
            })
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                // console.log(data.data);
 
                if(data.success===true){
 
                    if(value.length!==""){
                        setsearchResults(data.data)  
                    }
                    else{
                        setsearchResults([]);
                    }
 
             }
             
         })
         .catch(function(err){
             console.log(err);
         })

        }
        else{
            setsearchResults([]);
        }

    }

    function createSelected(){
        console.log(vendorProduct.current);

        fetch(path.BASE_URL+path.CREATE_VENDOR_PRODUCT,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(vendorProduct.current)
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(err){
            console.log(err);
        })
    }

    return (
        <div className="vendor_select_product">

            {
                selectproductvisible===true?(
                    <div className="select-product-modal" onClick={function(){
                        setselectproductvisible(false);
                    }}>
                    <div className="select-modal" onClick={function(event){
                        event.stopPropagation();
                    }}>

                        <div className="searching">
                            <input type="text" ref={selected_product_name} className="form-control" placeholder="Please start typing" onChange={function(event){
                                searchProducts(event.target.value);
                            }}/>

                           
                           {
                             searchResults.length !==0 ?(
                                <ul className="search_results">
                                     {
                                         searchResults.map(function(pro,index){
                                             return (
                                                 <li key={index} onClick={function(){
                                                    vendorProduct.current['product']=pro._id;
                                                    setsearchResults([]);
                                                    selected_product_name.current.value=pro.name;
                                                 }}>{pro.name}</li>
                                             );
                                         })
                                     }
                                </ul>

                             ):null
                           }
                           

                        </div>

    
                       
    
                        <input type="number" className="form-control" placeholder="Please enter quanity" style={{width:"40%"}} onChange={function(event){
                            vendorProduct.current['quantity']=event.target.value;
                        }}/>
    
                        <button className="btn btn-primary" onClick={function(){
                            createSelected();
                            setselectproductvisible(false);
                        }}>select</button>
    
                    </div>
    
                    </div>

                ):null
            }

           
            <div className="select_product">
                <h4 style={{fontSize:"17px"}}>Please select products</h4>

                <button style={{fontSize:"12px !important"}} className="btn btn-primary" onClick={function(){
                    setselectproductvisible(true);
                }}>Select</button>

            </div>
        </div>
    );

}

export default VendorSelectProducts;