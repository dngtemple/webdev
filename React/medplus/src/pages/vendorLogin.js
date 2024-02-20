import { useState, } from "react";
import path from "../path.json";
import { useNavigate } from "react-router-dom";


function VendorLogin(){

    let navigate=useNavigate();

    let vendorCred={};
    let [message,setmessage]=useState(null);

    function readValue(property,value){
        vendorCred[property]=value;
    }

    function summit(){
        fetch(path.BASE_URL+path.VENDOR_LOGIN,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(vendorCred)
        })
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            // console.log(data);

            if(data.success===true){
                navigate("/vendordash");
            }
            else{

                {
                    setmessage({msg:data.message,msgClass:"error_msg"});

                    setTimeout(function(){
                        setmessage(null);
                    },5000)
                }
            }

        })
        .catch(function(err){
            console.log(err);
        })
        
    }





    return(
        <div className="admin-login-container">
            <div className="admin-login">
                <h4>Vendor Log In</h4>

                <input className="form-control" type="text" placeholder="Enter email" onChange={function(event){
                    readValue("email",event.target.value)
                }}/>
                <input className="form-control" type="password" placeholder="Enter password" onChange={function(event){
                    readValue("password",event.target.value);
                }}/>

                <button className="btn btn-lt btn-primary" onClick={function(){
                    summit();
                }}>Login</button>
            </div>


            {
                message!==null?(
                    <div className={"message "+message.msgClass}>
                        {message.msg}
                    </div>
                )
                :null
            }
            
        </div>
    )

}

export default VendorLogin;