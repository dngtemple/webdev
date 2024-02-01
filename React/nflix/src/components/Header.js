import { useState,useEffect,} from "react";
import Caterogy from "./Caterogy";

function Header(){

    let [movies,setmovies]=useState([]);
    let [filtered,setfiltered]=useState([]);
    let [modal,setmodal]=useState(false);

    let nflix_user=JSON.parse(localStorage.getItem("nflix_user"));

    useEffect(function(){
        fetch("http://localhost:8000/movies/",{
            method:"GET",
            headers:{
                "authorization":`Bearer ${nflix_user.token}`
            }
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            setmovies(data);
            
        })
        .catch(function(err){
            console.log(err);
        })
    },[])

    function searchmovie(name){

        

        if(name !==''){
            let filter=movies.filter(function(movie,index){
                return movie.name.toUpperCase().includes(name.toUpperCase());
            })
            setmodal(true);
            setfiltered(filter);
        }
        else{
            setfiltered([]);
            setmodal(false);
        }
    }
    return(
        <div>

        {/* header section */}

        <header className="header_section">
            <div className="header">
                <div className="logo">MoviesHUB</div> 


                <div className="search">
                    <input type="text" placeholder="search movies" onChange={function(event){
                       searchmovie(event.target.value);

                    }}

                    onFocus={function(){
                        setmodal(true);
                    }}

                    onBlur={function(){
                        setmodal(false);
                    }}
                    
                    />

                    <i className="fa-solid fa-magnifying-glass searching" ></i>

                    <i className="fa-regular fa-user user" ></i>
                    
                </div>
            </div>
            
            
        </header>


        {
            modal===true?(
                <div className="search_section">
                    <Caterogy cat_title="Search Results" movies={filtered}/>
                </div>

            ):null
        }
        
        
        
        
        </div>
        
    );
}
export default Header;