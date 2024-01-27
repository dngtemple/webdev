import { Navigate } from "react-router-dom";

function Homepage(){

    let token=localStorage.getItem("nflix_token");
    console.log(token);
    return token!==null?(
        <h1>hi</h1>
        
    ):
    <Navigate to={"/login"}/>
}
export default Homepage;