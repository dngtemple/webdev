

function Register(){

    let user={};

    
    function readProperty(property,value){
        user[property]=value;
        console.log(user);
    }

    function register(){
        fetch("http://localhost:8000/users/",{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(user)
        })
        .then(function(response){
            return response.json();
        })
        .then(function(message){
            console.log(message);
        })
        .catch(function(err){
            console.log(err);
        })
    }
    return(
        <div className="form_container">
            <input type="text" placeholder="Name" onChange={function(event){
                readProperty("name",event.target.value);
            }}/>

            <input type="text" placeholder=" Username" onChange={function(event){
                readProperty("username",event.target.value);
            }}/>

            <input type="email" placeholder=" Email" onChange={function(event){
                readProperty("email",event.target.value);
            }}/>

            <input type="password" placeholder="Password" onChange={function(event){
                readProperty("password",event.target.value);
            }}/>

            <input type="number" placeholder=" Contact" onChange={function(event){
                readProperty("contact",event.target.value);
            }} />
            
            <input type="text" placeholder="Enter city" onChange={function(event){
                readProperty("city",event.target.value);
            }}/>

            <button className="btn btn-primary" onClick={function(){
                register();
            }}>Register</button>

        </div>
    );
}
export default Register;