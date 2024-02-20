import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import path from "../path.json"


function ViewVendors(){

    let[vendors,setvendors]=useState([]);

    useEffect(function(){
        fetch(path.BASE_URL+path.ALL_VENDORS,{
            method:"GET",
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            setvendors(data.info);
            console.log(vendors);
        })
        .catch(function(err){
            console.log(err);
        })
    },[])
    return(

        <>
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


        <h5 style={{textAlign:"center", fontSize:"25px"}}>vendors</h5>    

        <table className="table table-striped table-hover" style={{fontSize:"13px"}}>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Store</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Action</th>
                </tr>
    
            </thead>
    
            <tbody>
    
                {
                    vendors.map(function(vendor,index){
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{vendor.name}</td>
                                <td>{vendor.store_name}</td>
                                <td>{vendor.store_address}</td>
                                <td>{vendor.contact}</td>
                                <td>
                                   <i className="fa-regular fa-eye" style={{marginLeft:"3px"}}></i>
    
    
                                   <i className="fa-solid fa-person-circle-check" style={{marginLeft:"3px"}}></i>
    
                                   <i className="fa-solid fa-lock" style={{marginLeft:"3px"}}></i>
                                    
                                </td>
                            </tr>
    
                        )
                    })
                }
               
    
            </tbody>
        </table>  

    </>     

    )
}

export default ViewVendors;