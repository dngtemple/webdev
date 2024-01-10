import { useState } from "react";


function Demo(){

    // let name="Jeffery";

    let[name,setName]=useState("John");

    function ChangeName(){
        // name="Eric";

        setName("Kofi");
    }
    console.log(name);

    return(
        <div className="demo">
           <h1>{name}</h1>

           <button onClick={function(){
              ChangeName();
           }}>Change name</button>

        </div>
    );
}

export default Demo;