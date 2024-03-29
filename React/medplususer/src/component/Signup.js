
import store from "../images/store.jpg";
import {useRef } from "react";
import {useNavigate} from "react-router-dom"


function Signup(){
    const navigate=useNavigate();

    let user=useRef({});

    function readValue(property,value){
        user.current[property]=value;
    }

    function createUser(){
        console.log(user.current);

        fetch("http://localhost:8000/user/register",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user.current)
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);

            if(data.success===true){
                navigate("/login")
            }

        })
        .catch(function(err){
            console.log(err);
        })
    }

    
        return(
            <div className="background">
                <div className="register">
                    <img src={store} style={{width:"100%",height:"100%",opacity:"0.4"}}/>

                    <div className="register_form">

                        <h3 style={{fontWeight:200,textAlign:"center",fontSize:"25px"}}>Register</h3>

                        <form  className="form">

                        <input type="text" placeholder="Enter your name" onChange={(event)=>{
                            readValue("name",event.target.value);
                        }}/>

                        <input type="text" placeholder="Enter your email" onChange={(event)=>{
                            readValue("email",event.target.value);
                        }}/>

                        <input type="password" placeholder="Enter your password" onChange={(event)=>{
                            readValue("password",event.target.value);
                        }}/>

                        <input type="text" placeholder="Enter your contact" onChange={(event)=>{
                            readValue("contact",event.target.value);
                        }}/>

                        <select onChange={(event)=>{
                            readValue("gender",event.target.value);
                        }}>
                            <option value="">Please select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>

                        <button type="button" onClick={()=>{
                            createUser();
                        }}>Sign Up</button>

                        </form>

                        
                        <p style={{fontSize:"11px",marginTop:"20px"}}>
                         By using our website, you agree to be bound by
                         these Terms and Conditions and all applicable
                          laws and regulations. If you do not agree with
                           any of these terms, you are prohibited from
                            using or accessing this site.
                        </p>

                        <p style={{fontSize:"13px",marginTop:"20px"}}>
                          Already an existing member?
                           <span style={{color:"blue",cursor:"pointer"}}>  Login</span>
                          
                        </p>

                      

                        

                    </div>

                    

                </div>

            </div>
        )
    
}

export default Signup;