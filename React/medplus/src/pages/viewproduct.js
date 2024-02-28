import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import path from "../path.json";

function Viewproduct(){

    let [products,setproducts]=useState([]);
    let [product,setproduct]=useState([]);

    let [viewModalVisible,setviewModalVisible]=useState(false);
    let [updateVisible,setupdateVisible]=useState(false);

    let productUpdate=useRef([]);


    let addNewImage=useRef();

    let role=useRef(JSON.parse(localStorage.getItem("admin_info"))).current;
    


    let [categories,setcategories]=useState([]);

    // function to get all products
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
                // console.log(products);
            }
        })
        .catch(function(err){
            console.log(err);
        })
    },[])

    
    // function to get all categories
    useEffect(function(){
        fetch("http://localhost:8000/category/allcategory",{
            method:"GET"
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            if(data.success===true){
                setcategories(data.data);
                // console.log(categories);
            }
           
        })
        .catch(function(err){
            console.log(err);
        })
    },[])


    // function to delete a product
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
        productUpdate.current[property]=value;

    }


    // function of the plus working as input
    function addNew(){
        addNewImage.current.click();
    }


    function setUpdate(pro){

        // setproduct(product);
        setupdateVisible(true);
        productUpdate.current=pro

    }


    // function to update the feilds
    function update(){
        fetch(path.BASE_URL+path.UPDATE_PRODUCT+productUpdate.current._id,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(productUpdate.current)
        })
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)

            if(data.success===true){
                

                if(typeof productUpdate.current.category !== "object"){
                    let category=categories.find(function(cat,index){
                        return cat._id===productUpdate.current.category;
                    })
                    
                    console.log(category);
                    productUpdate.current.category=category;
                }
                

                setupdateVisible(false);
            }
        })
        .catch(function(err){
            console.log(err);
        })

    }


    // function for updating adding a new image

    function  updateImage(productID,file){
        let formData=new FormData();

        formData.append("image",file);

        fetch(path.BASE_URL+path.UPLOADING_SINGLE_IMAGE+productID,{
            method:"PUT",
            body:formData
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            // console.log(data);

            if(data.success===true){

                let tempData=[...products];

                let product=tempData.find(function(pro,index){
                    return pro._id === productID;
                })

                product.images.push(data.image);
                setproducts(tempData);

                // productUpdate.current.images.push(data.image);
            }
        })
        .catch(function(err){
            console.log(err);
        })


    }


    // function for deleting one image as an update

    function deleteOneImage(pro_id,imagePath){
        fetch(path.BASE_URL+path.DELETING_SINGLE_IMAGE+pro_id,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({image:imagePath})
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);

            if(data.success===true){
                let tempData=[...products];

                let product=tempData.find(function(pro,index){
                    return pro._id === pro_id;
                })

                let index=product.images.findIndex(function(img,index){
                    return img===imagePath;
                })

                product.images.splice(index,1);

                setproducts(tempData);

            }
        })
        .catch(function(err){
            console.log(err);
        })

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
                                <strong>{product.prescription_request===true?" yes":" no"}</strong>
                            </p>

                            {
                                product.images.map(function(image,index){
                                    return(
                                        <img key={index}src={image} width={100} height={100}/>
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
                                <input defaultValue={productUpdate.current.name} type="text" placeholder="Enter name" className="form-control" onChange={function(event){
                                    readValue("name",event.target.value);
                                }}/>

                                <input defaultValue={productUpdate.current.price} type="Number" placeholder="Enter price"className="form-control" onChange={function(event){
                                    readValue("price",event.target.value);
                                }} />

                                <textarea defaultValue={productUpdate.current.description} type="text" placeholder="Enter description"className="form-control" onChange={function(event){
                                    readValue("description",event.target.value);
                                }}/>
                
                                <input  defaultValue={productUpdate.current.tags.toString()} type="text" className="form-control" placeholder="Enter tags" onChange={function(event){
                                    readValue("tags",event.target.value);
                                }}/>

                                <input  defaultValue={productUpdate.current.discount} type="number" className="form-control" placeholder="Enter discount" onChange={function(event){
                                    readValue("discount",event.target.value);
                                }}/>


                                <select className="form-control" onChange={function(event){
                                    readValue("category",event.target.value);
                                }}>
                                    <option defaultValue={productUpdate.current.category._id}>{productUpdate.current.category.name}</option>
                
                                    {
                                        categories.map(function(cat,index){
                                            return(
                                                <option key={index} value={cat._id}>{cat.name}</option>
                                            )
                                        })
                                    }
                                   
                                </select>


                                <div>
                                Approved
                                <input  defaultChecked={productUpdate.current.approved} type="checkbox" onChange={function(event){
                                    readValue("approved",event.target.checked);
                                }}/>
                                
                                Prescriped
                                <input defaultChecked={productUpdate.current.prescription_request} type="checkbox" onChange={function(event){
                                    readValue("prescription_request",event.target.checked);
                                }}/>
                
                                <button className="btn btn-primary mt-2" onClick={function(){
                                    update();
                                }}>update</button>
                
                                </div>

                                <div className="update_images_section">
                                    {
                                        productUpdate.current.images.map(function(image,index){
                                            return (
                                                <div  key={index} className="update_image">
                                                    <img src={image} height={100} width={145}/>

                                                    <i className="fa-solid fa-circle-xmark close" onClick={function(){
                                                        deleteOneImage(productUpdate.current._id,image);
                                                    }}></i>
                                                </div>

                                            )
                                        })
                                    }

                                    <div className="plus-section" onClick={function(event){
                                        addNew();
                                       }}>
                                      <i  className="fa-solid fa-plus plus" 
                                      ></i>
                                    </div>

                                </div>


                                <input ref={addNewImage}  className="hidden_input" type="file" onChange={function(event){
                                        updateImage(productUpdate.current._id,event.target.files[0])
                            
                                }}/>

                
                               


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
                    {
                        role !==null && role.role==="admin"?(
                          <th>Action</th>

                        ):null
                    }
                    </tr>

                </thead>

                <tbody>

                    {
                        products.map(function(product,index){
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    {
                                        product.approved===false?(
                                            <td style={{color:"red"}}>{product.name}</td>

                                        ):
                                        <td>{product.name}</td>
                                    }
                                    
                                    <td>{product.category.name}</td>
                                    <td>{product.price}</td>
                                    {
                                        role!==null && role.role==="admin"?(
                                            <td>
                                                <i className="fa-solid fa-eye text-primart" onClick={function(){
                                                  setproduct(product);
                                                  setviewModalVisible(true);
                                                }}></i>
                                                <i className="fa-solid fa-pen-to-square text-success " onClick={function(){
                                                   setUpdate(product);
                                                }}></i>
                                                <i className="fa-solid fa-trash text-danger" onClick={function(){
                                                  deleteproduct(product._id,index);
                                                }}></i>

                                                
                                            </td>

                                        ):null

                                    }
                                    
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