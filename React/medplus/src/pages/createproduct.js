
import { useEffect, useState } from "react";
import { Link, } from "react-router-dom";


function Createproduct(){

    const formData =new FormData();
    let [categories,setcategories]=useState([]);


    function readValue(property,value){
        formData.append(property,value);
    }

    // console.log(formData);


    function create(){
        fetch("http://localhost:8000/product/create_product",{
            method:"POST",
            body:formData
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
                console.log(categories);
            }
           
        })
        .catch(function(err){
            console.log(err);
        })
    },[])

   

    return (

        <div className="panel">

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


            <h5>create product</h5>

            <div className="panel_inputs">
               
                <input type="text" placeholder="Enter name" className="form-control" onChange={function(event){
                    readValue("name",event.target.value);
                }}/>
                <input type="Number" placeholder="Enter price"className="form-control" onChange={function(event){
                    readValue("price",event.target.value);
                }} />
                <input type="text" placeholder="Enter description"className="form-control" onChange={function(event){
                    readValue("description",event.target.value);
                }}/>
                <input type="file" className="form-control" multiple onChange={function(event){
                    
                    for(let i = 0;i<event.target.files.length;i++){
                        readValue("image"+i,event.target.files[i]);
                    }
                    
                }}/>

                <input type="text" className="form-control" placeholder="Enter tags" onChange={function(event){
                    readValue("tags",event.target.value);
                }}/>
                <select className="form-control" onChange={function(event){
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
                   
                </select>

                <div>
                Approved
                <input type="checkbox" onChange={function(event){
                    readValue("approved",event.target.checked);
                }}/>
                
                Prescriped
                <input type="checkbox" onChange={function(event){
                    readValue("prescription_request",event.target.checked);
                }}/>

                <button className="btn btn-primary" onClick={function(){
                    create();
                }}>Create</button>

                </div>

                

            </div>

        </div>
    );
}

export default Createproduct;