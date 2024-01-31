import { Navigate } from "react-router-dom";

function Protect(props){

    let token=JSON.parse(localStorage.getItem("nflix_user")).token;

    return token!==null?(
        props.children
        
    ):
    <Navigate to={"/login"}/>
}
export default Protect;