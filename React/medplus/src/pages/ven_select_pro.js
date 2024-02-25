import { useState } from "react";

import path from "../path.json";


function VendorSelectProducts(){


    let [selectproductvisible,setselectproductvisible]=useState(false);

    let [searchResults,setsearchResults]=useState([]);



    function searchProducts(value){
        fetch(path.BASE_URL+path.VENDOR_SEARCH_PRODUCT+value,{
            method:'GET'
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data.data);

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
                            <input type="text" className="form-control" placeholder="Please start typing" onChange={function(event){
                                searchProducts(event.target.value);
                            }}/>

                           
                           {
                             searchResults.length !==0 ?(
                                <ul className="search_results">
                                     {
                                         searchResults.map(function(pro,index){
                                             return (
                                                 <li key={index}>{pro.name}</li>
                                             );
                                         })
                                     }
                                </ul>

                             ):null
                           }
                           

                        </div>

    
                       
    
                        <input type="number" className="form-control" placeholder="Please enter quanity" style={{width:"40%"}}/>
    
                        <button className="btn btn-primary">select</button>
    
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