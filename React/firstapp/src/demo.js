import { useState,useRef, useEffect } from "react";


function Demo(){

    // using useState variable          // with state the page re renders
    let[name,setName]=useState("John");
    function ChangeName(){
        // name="Eric";
        setName("Kofi");
    }


    // using useRef variable            // with ref the page does not re render
    let user=useRef("User_1");
    // console.log(user.current);
    function ChangeUser(){
        user.current="User_2";
    }



    // using useEffect

    useEffect(function(){
        console.log("Thie is something that renders and re renders");
    },[])

    return(
        <div className="demo">

           <h1>{name}</h1>
           <button onClick={function(){
              ChangeName();
           }}>Change name</button>


           <h2>{user.current}</h2>

           <button onClick={function(){
              ChangeUser();
           }}>ChangeUser</button>

        </div>
    );
}

export default Demo;