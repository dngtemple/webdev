import path from "../path.json";
import { useState } from "react";



function VendorRegistration(){

    let vendor={};
    let [message,setmessage]=useState(null);



    function readValue(property,value){
        vendor[property]=value;
    }


    function summit(){
        fetch(path.BASE_URL+path.VENDOR_REGISTER,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(vendor)
        })
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data);

            if(data.success===true){
                setmessage({msg:data.message,msgClass:"success_msg"});
            }
            else{

                setmessage({msg:data.message,msgClass:"error_msg"});
            }

            setTimeout(function(){
                setmessage(null);
            },5000)

        })
        .catch(function(err){
            console.log(err);
        })
        
    }


    return(
        <div className="admin-login-container">
            <div className="admin-login">
                <h4>Vendor SignUp </h4>

                <input className="form-control" type="text" placeholder="Enter name" onChange={function(event){
                    readValue("name",event.target.value)
                }}/>

                <input className="form-control" type="text" placeholder="Enter email" onChange={function(event){
                    readValue("email",event.target.value)
                }}/>

                <input className="form-control" type="password" placeholder="Enter password" onChange={function(event){
                    readValue("password",event.target.value);
                }}/>

                <input className="form-control" type="text" placeholder="Enter store name" onChange={function(event){
                    readValue("store_name",event.target.value);
                }}/>

                <input className="form-control" type="text" placeholder="Enter store address" onChange={function(event){
                    readValue("store_address",event.target.value);
                }}/>

                <input className="form-control" type="number" placeholder="Enter pan number" onChange={function(event){
                    readValue("pan_number",event.target.value);
                }}/>

                <input className="form-control" type="number" placeholder="Enter pin Code" onChange={function(event){
                    readValue("pinCode",event.target.value);
                }}/>

                <input className="form-control" type="number" placeholder="Enter phone number" onChange={function(event){
                    readValue("contact",event.target.value);
                }}/>

                <button className="btn btn-lt btn-primary" onClick={function(){
                    summit();
                }}>Register</button>
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
export default VendorRegistration;