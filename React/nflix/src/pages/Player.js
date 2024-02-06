import {useEffect, useState } from "react";
import Header from "../components/Header";
import {useParams } from "react-router-dom";
import { useRef } from "react";

function Player(){
    let params=useParams();

    let [playervisible,setplayervisible]=useState(false);
    let [movie,setmovie]=useState({});

    let nflix_user=JSON.parse(localStorage.getItem("nflix_user"));

    let [usermovie,setusermovie]=useState({});
    let videoplay=useRef();

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
        //    console.log(data);
           setmovie(data);
        })
        .catch(function(err){
            console.log(err);
        })
    },[])

    function play(){

        let nflix_user=JSON.parse(localStorage.getItem("nflix_user"));

        let user_id=nflix_user.user_id;
        let movie_id=params.id;
         

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
            setplayervisible(true);
            console.log(data);
            setusermovie(data.userMovie);
            // videoplay.current.currentTime=usermovie.watchTime;
        })
        .catch(function(err){
            console.log(err);
        })
    }


    function close(){
        let nflix_user=JSON.parse(localStorage.getItem("nflix_user"));

        fetch(`http://localhost:8000/users/closeplay/${usermovie._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json",
                "Authorization":`Bearer ${nflix_user.token}`,
            },
            body:JSON.stringify({watchTime:videoplay.current.currentTime}),
        })
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            if(data.success===true){
                setplayervisible(false);
            }
        })
        .catch(function(err){
            console.log(err);
        })

    }

    useEffect(function(){
        if(playervisible===true){
            videoplay.current.currentTime=usermovie.watchTime;
        }
    },[playervisible])
    

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
                                close();
                            }}></i>
                        </div>
                
                        <video ref={videoplay} className="player_video" controls autoPlay >
                           <source src={`http://localhost:8000/movies/stream/${movie._id}`}></source>
                        </video>
                    </div>

                )
            }
            


            


        </section>

        
        </>
         
    );

}
export default Player;