import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Viewproduct(){

    let [products,setproducts]=useState([]);


    useEffect(function(){
        fetch("http://localhost:8000/product/allproducts",{
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
                                    <td>action</td>
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