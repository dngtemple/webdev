import React,{Component,} from "react";
import store from "../images/store.jpg";


class Signup extends Component{

    constructor(props){
        super(props);
        this.user=React.createRef();
        this.user.current={};

        this.formClear=React.createRef();


    }

    readValue=(property,value)=>{
        this.user.current[property]=value;
    }

    createUser=()=>{
        console.log(this.user.current);

        fetch("http://localhost:8000/user/register",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(this.user.current)
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);

            if(data.success===true){
                this.formClear.reset();
            }

        })
        .catch(function(err){
            console.log(err);
        })
    }

    render(){
        return(
            <div className="background">
                <div className="register">
                    <img src={store} style={{width:"100%",height:"100%",opacity:"0.4"}}/>

                    <div className="register_form">

                        <h3 style={{fontWeight:200,textAlign:"center",fontSize:"25px"}}>Register</h3>

                        <form ref={this.formClear} className="form">

                        <input type="text" placeholder="Enter your name" onChange={(event)=>{
                            this.readValue("name",event.target.value);
                        }}/>

                        <input type="text" placeholder="Enter your email" onChange={(event)=>{
                            this.readValue("email",event.target.value);
                        }}/>

                        <input type="password" placeholder="Enter your password" onChange={(event)=>{
                            this.readValue("password",event.target.value);
                        }}/>

                        <input type="text" placeholder="Enter your contact" onChange={(event)=>{
                            this.readValue("contact",event.target.value);
                        }}/>

                        <select onChange={(event)=>{
                            this.readValue("gender",event.target.value);
                        }}>
                            <option value="">Please select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>

                        <button type="button" onClick={()=>{
                            this.createUser();
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
}

export default Signup;