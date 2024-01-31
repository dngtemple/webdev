import { Navigate } from "react-router-dom";

function Protect(props){

    let nflixData=JSON.parse(localStorage.getItem("nflix_user"));

    let token = nflixData ? nflixData.token : null;

    return token!==null?(
        props.children
        
    ):
    <Navigate to={"/login"}/>
}
export default Protect;