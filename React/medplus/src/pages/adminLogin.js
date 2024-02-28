import { useState } from "react";
import "../css/admin.css";

import { useNavigate } from "react-router-dom";

import path from "../path.json";


function AdminLogin(){
    let navigate=useNavigate();

    let admin={};
    let [message,setmessage]=useState(null);

    function readValue(property,value){
        admin[property]=value;
    }
    // console.log(path);

    function summit(){
        fetch(path.BASE_URL+path.ADMIN_LOGIN,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(admin)
        })
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data);

            if(data.success===true){
                localStorage.setItem("admin_info",JSON.stringify(data));
                navigate("/admindash");
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
                <h4>Admin </h4>

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

export default AdminLogin;