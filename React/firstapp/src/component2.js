import { useContext } from "react";
import {dataContext} from './App';


function Component2(){

    let data=useContext(dataContext);
    return(
        <h1>component 2:{data}</h1>

    );
}

export default Component2;