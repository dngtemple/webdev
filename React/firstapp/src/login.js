import { useRef } from "react";

function Login(){

    let inp=useRef();


    function clear(){
        // making the value of an input blank
        inp.current.style.width="100px";
    }
    return(
        <div className="login_container">

            <input type="text" ref={inp} placeholder="Please enter your email" style={{padding:"40px 20px", backgroundColor:"black"}}/>

            <button onClick={function(){
                clear();
            }}>Clear</button>

        </div>
    );
}

export default Login;

