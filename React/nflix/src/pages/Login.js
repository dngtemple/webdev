import { useNavigate } from "react-router-dom";


function Login(){
         const navigate=useNavigate();


        let userCred={};

    
        function readProperty(property,value){
            userCred[property]=value;
            console.log(userCred);
        }
    
        function login(){
            fetch("http://localhost:8000/users/login",{
                method:"POST",
                headers:{
                    "content-type":"application/json",
                },
                body:JSON.stringify(userCred)
            })
            .then(function(response){
                return response.json();
            })
            .then(function(message){
                console.log(message);

                if(message.success===true){
                    localStorage.setItem("nflix_user",JSON.stringify(message));
                    navigate("/homepage");
                }
            })
            .catch(function(err){
                console.log(err);
            })
        }
    return(
            <div className="form_container">
    
                <input type="text" placeholder=" Username" onChange={function(event){
                    readProperty("username",event.target.value);
                }}/>

                <input type="password" placeholder="Password" onChange={function(event){
                    readProperty("password",event.target.value);
                }}/>
    
                <button className="btn btn-primary" onClick={function(){
                    login();
                }}>Login</button>
    
            </div>
    );
}
export default Login;