import { Navigate } from "react-router-dom";

function Protect(props){

    let token=localStorage.getItem("nflix_token");
    console.log(token);
    return token!==null?(
        props.children
        
    ):
    <Navigate to={"/login"}/>
}
export default Protect;