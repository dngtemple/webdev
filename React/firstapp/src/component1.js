import Component2 from './component2';

import { createContext } from 'react';


function Component1(){
    let data="clinton templeton";

    const dataContext=createContext();


    return(
        <div>

            <dataContext.Provider value={data}>

                <Component2/>

            </dataContext.Provider>
            
        </div>
    );

}

export default Component1;