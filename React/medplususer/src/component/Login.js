import React,{Component} from "react";
import store from "../images/store.jpg";


class Login extends Component{

    constructor(props){
        super(props)

        this.userCred=React.createRef()
        this.userCred.current=({});
    }

    readValue=(property,value)=>{
        this.userCred.current[property]=value;
    }

    login=()=>{

        fetch("http://localhost:8000/user/login",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(this.userCred.current)
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

    }



    render(){
        return(
            <div className="background">
                <div className="register" style={{height:"60vh"}}>
                    <img src={store} style={{width:"100%",height:"100%",opacity:"0.4"}}/>

                    <div className="register_form">

                        <h3 style={{fontWeight:200,textAlign:"center",fontSize:"25px"}}>Log In</h3>

                        <form className="form">


                        <input type="text" placeholder="Enter your email" onChange={(event)=>{
                            this.readValue("email",event.target.value);
                        }}/>

                        <input type="password" placeholder="Enter your password" onChange={(event)=>{
                            this.readValue("password",event.target.value);
                        }}/>

                       

                        <button type="button" onClick={()=>{
                            this.login();
                        }}>Log In</button>

                        </form>

                        
                        <p style={{fontSize:"11px",marginTop:"20px"}}>
                         By using our website, you agree to be bound by
                         these Terms and Conditions and all applicable
                          laws and regulations. If you do not agree with
                           any of these terms, you are prohibited from
                            using or accessing this site.
                        </p>

                        <p style={{fontSize:"13px",marginTop:"20px"}}>
                          Don't have an account?
                           <span style={{color:"blue",cursor:"pointer"}}>  Sign Up</span>
                          
                        </p>

                      

                        

                    </div>

                    

                </div>

            </div>
        )
    }
}

export default Login;