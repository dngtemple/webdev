import {  useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

function Player(){
    let params=useParams();

    console.log(params);

    let [movie,setmovie]=useState({});

    let nflix_user=JSON.parse(localStorage.getItem("nflix_user"));

    useEffect(function(){
        fetch(`http://localhost:8000/movies/${params.id}`,{
           method:"GET",
            headers:{
               "authorization":`Bearer ${nflix_user.token}`
            }
        })
        .then(function(response){
           return response.json();
        })
        .then(function(data){
           console.log(data);
           setmovie(data);
        })
        .catch(function(err){
            console.log(err);
        })
    },[])
    

    return(
        

        <>
  
        {/* header */}

        <Header/>        

       {/* banner section */}
        <section className="banner_section">
            <div className="ban_parent">

                <img className="image" src={movie.posterURL}/>

                <div className="image_details">
                    <h4>{movie.name}</h4>

                    <p>
                     {movie.description}
                    </p>

                    <button className="image_details_button">
                        Play
                    </button>

                </div>

            </div>

        </section>

        
        </>
         
    );

}
export default Player;