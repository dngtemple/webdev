import Component2 from './component2';
import { useContext } from 'react';

import{dataContext} from "./App";

function Component1(){


    let data=useContext(dataContext);
 
    return(
        <div>

         <h3>Component1 :{data} </h3>

         <Component2/>
            
        </div>
    );

}

export default Component1;