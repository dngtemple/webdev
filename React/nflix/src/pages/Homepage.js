import { useEffect, useState } from "react";
import Caterogy from "../components/Caterogy";
import Header from "../components/Header";
import "./Homepage.css";

import { Link } from "react-router-dom";

function Homepage(){

    // let [movies,setmovies]=useState([]);
    let [trendingmovies,settrendingmovies]=useState([]);
    let [dramamovies,setdramamovies]=useState([]);
    let [actionmovies,setactionmovies]=useState([]);
    let [topmovie,settopmovie]=useState({});

    let nflix_user=JSON.parse(localStorage.getItem("nflix_user"));

   useEffect(function(){
    fetch("http://localhost:8000/movies/",{
        method:"GET",
        headers:{
            "autorization":`Bearer ${nflix_user.token}`
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data);
        // setmovies(data);

        let drama=data.filter(function(movie,index){
            return movie.genres.toUpperCase().includes("drama".toUpperCase());
        })
        // console.log(drama);
        setdramamovies(drama)

        let action=data.filter(function(movie,index){
            return movie.genres.toUpperCase().includes("adventure".toUpperCase());
        })
        // console.log(action);
        setactionmovies(action)

        let trendingmovies=data.sort(function(a,b){
            return b.watchers-a.watchers;
        })
        let trending=trendingmovies.slice(0,5);
        // console.log(trending)
        settrendingmovies(trending);

        let top=data.find(function(movie,index){
            return movie.top===true;
        })

        settopmovie(top);


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

                <img className="image" src={topmovie.posterURL}/>

                <div className="image_details">
                    <h4>{topmovie.name}</h4>

                    <p>
                     {topmovie.description}
                    </p>
                    
                    <Link to={"/player/"+topmovie._id}>
                      <button className="image_details_button">
                        Watch Now
                       </button>
                    </Link>
                    

                </div>

            </div>

        </section>

        {/* caterogy section */}

        <Caterogy cat_title="Top Trending" movies={trendingmovies}/>

        <Caterogy cat_title="Action Movies" movies={actionmovies}/>

        <Caterogy cat_title="Drama" movies={dramamovies}/>
        


        </>
        

        
    );

}
export default Homepage;