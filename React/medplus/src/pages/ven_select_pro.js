import { useState } from "react";


function VendorSelectProducts(){


    let [selectproductvisible,setselectproductvisible]=useState(false);
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
    
                        <input type="text" className="form-control" placeholder="Please start typing"/>
    
                        <input type="number" className="form-control" placeholder="Please enter quanity"/>
    
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