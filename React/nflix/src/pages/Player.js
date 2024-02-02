import {useEffect, useState } from "react";
import Header from "../components/Header";
import {useParams } from "react-router-dom";

function Player(){
    let params=useParams();

    let [playervisible,setplayervisible]=useState(false);
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

    function play(){

        let nflix_user=JSON.parse(localStorage.getItem("nflix_user"));

        let user_id=nflix_user.user_id;
        let movie_id=params.id

        fetch("http://localhost:8000/users/play",{
            method:"POST",
            headers:{
               "Authorization":`Bearer ${nflix_user.token}`,
               "Content-Type":"application/json"
            },
            body:JSON.stringify({movie:movie_id,user:user_id})
        })
        .then(function(response){
           return response.json();
        })
        .then(function(data){
           console.log(data);
        })
        .catch(function(err){
            console.log(err);
        })
    }

    

    return(
        

        <>
  
        {/* header */}

        <Header/>        

       {/* banner section */}
        <section className="banner_section">

            {
                playervisible===false?(
                    <div className="ban_parent">

                        <img className="image" src={movie.posterURL}/>

                        <div className="image_details">
                           <h4>{movie.name}</h4>

                           <p>
                              {movie.description}
                            </p>

                            <button className="image_details_button" onClick={function(){
                                play();
                                setplayervisible(true);
                            }}>
                                Play
                            </button>

                        </div>
                    </div>

                ):(
                    <div className="player_section">
                        <div className="player_details">
                           <h4>{movie.name}</h4>

                            <i className="fa-solid fa-close close " onClick={function(){
                                setplayervisible(false);
                            }}></i>
                        </div>

                
                        <video className="player_video" controls>
                           <source src=""></source>
                        </video>
                    </div>

                )
            }
            


            


        </section>

        
        </>
         
    );

}
export default Player;