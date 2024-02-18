import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import path from "../path.json";

function Viewproduct(){

    let [products,setproducts]=useState([]);
    let [product,setproduct]=useState([]);
    let [viewModalVisible,setviewModalVisible]=useState(false);
    let [updateVisible,setupdateVisible]=useState(false);

    useEffect(function(){
        fetch(path.BASE_URL+path.ALL_PRODUCTS,{
            method:"GET"
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            if(data.success===true){
                setproducts(data.data);
                console.log(products);
            }
        })
        .catch(function(err){
            console.log(err);
        })
    },[])



    function deleteproduct(product_id,product_index){

        fetch(path.BASE_URL+path.PRODUCT_DELETE+product_id,{
            method:"DELETE",
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

        let tempData=[...products];
        tempData.splice(product_index,1);

        setproducts(tempData);

    }

    function readValue(property,value){

    }

    function update(){

    }

    return (
        <div className="panel">
            {/* view modal */}

            {
                viewModalVisible===true?(
                    <div  className="view-product-modal" onClick={function(){
                        setviewModalVisible(false);
                    }}>
                        <div className="view-modal" onClick={function(event){
                            event.stopPropagation();
                        }}>
        
                            <h5>{product.name}</h5>
        
                            <p>
                                {product.description}
                            </p>
        
                            <div>
                                <h6>TAGS</h6>
                                <p className="text-danger">{product.tags}</p>
                            </div>

                            <div>
                                <h6>CATEGORY</h6>
                                <p className="text-danger">{product.category.name}</p>
                            </div>

        
                            <p>
                                approved -
                                <strong>{product.approved===true?"yes":"no"}</strong>
                            </p>
        
                            <p>
                                prescription -
                                <strong>{product.prescripton_request===true?" yes":" no"}</strong>
                            </p>

                            {
                                product.images.map(function(image,index){
                                    return(
                                        <img src={image} width={100} height={100}/>
                                    );
                                })
                            }
        
        
        
                        </div>

                    </div>

                ):null
            }


            {/* update modal */}

            {
                updateVisible===true?(
                    <div className="update-product-modal" onClick={function(){
                        setupdateVisible(false);
                    }}>
                        <div className="update-modal" onClick={function(event){
                            event.stopPropagation();

                        }}>
                                <input defaultValue={product.name} type="text" placeholder="Enter name" className="form-control" onChange={function(event){
                                    readValue("name",event.target.value);
                                }}/>

                                <input defaultValue={product.price} type="Number" placeholder="Enter price"className="form-control" onChange={function(event){
                                    readValue("price",event.target.value);
                                }} />

                                <input defaultValue={product.description} type="text" placeholder="Enter description"className="form-control" onChange={function(event){
                                    readValue("description",event.target.value);
                                }}/>

                                <input type="file" className="form-control" multiple onChange={function(event){
                                    
                                    for(let i = 0;i<event.target.files.length;i++){
                                        readValue("image"+i,event.target.files[i]);
                                    }
                                    
                                }}/>
                
                                <input  defaultValue={product.tags.toString()} type="text" className="form-control" placeholder="Enter tags" onChange={function(event){
                                    readValue("tags",event.target.value);
                                }}/>

                                <input type="text" className="form-control" placeholder="cat"/>

                                {/* <select className="form-control" onChange={function(event){
                                    readValue("category",event.target.value);
                                }}>
                                    <option value="">choose category</option>
                
                                    {
                                        categories.map(function(cat,index){
                                            return(
                                                <option key={index} value={cat._id}>{cat.name}</option>
                                            )
                                        })
                                    }
                                   
                                </select> */}
                
                                <div>
                                Approved
                                <input  checked={product.approved} type="checkbox" onChange={function(event){
                                    readValue("approved",event.target.checked);
                                }}/>
                                
                                Prescriped
                                <input checked={product.prescripton_request} type="checkbox" onChange={function(event){
                                    readValue("prescription_request",event.target.checked);
                                }}/>
                
                                <button className="btn btn-primary mt-2" onClick={function(){
                                    update();
                                }}>update</button>
                
                                </div>


                        </div>


                    </div>


                ):null
            }

            

            <div className="panel-links">
                <ul className="nav">
                    <Link to={"/admindash/create"}>
                     <li className="nav-link">create</li>
                    </Link>
                    
                    <Link to={"/admindash/view"}>
                     <li className="nav-link">view</li>
                    </Link>
                    
                    <li className="nav-link">export</li>
                    <li className="nav-link">overview</li>

                </ul>
            </div>


            <h5>products</h5>    

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        products.map(function(product,index){
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.category.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                      <i class="fa-solid fa-eye text-primart" onClick={function(){
                                        setproduct(product);
                                        setviewModalVisible(true);
                                      }}></i>
                                      <i class="fa-solid fa-pen-to-square text-success " onClick={function(){
                                        setproduct(product);
                                        setupdateVisible(true); 
                                      }}></i>
                                      <i class="fa-solid fa-trash text-danger" onClick={function(){
                                        deleteproduct(product._id,index);
                                      }}></i>
                                    </td>
                                </tr>

                            )
                        })
                    }
                   

                </tbody>
            </table>       
                
                 

        </div>
    );
}

export default Viewproduct;