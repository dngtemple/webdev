import { useState,useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";

function Header(){
    let navigate=useNavigate();

    let [movies,setmovies]=useState([]);
    let [filtered,setfiltered]=useState([]);
    let [modal,setmodal]=useState(false);

    let [logoutmodal,setlogoutmoodal]=useState(false);
    let nflix_user=JSON.parse(localStorage.getItem("nflix_user"));

    let username=nflix_user.username.toUpperCase();

    let searchValue=useRef();

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
            if(filter.length!==0){
                setmodal(true);
                setfiltered(filter);
            }
            else{
                setmodal(false);
            }
            
        }
        else{
            setfiltered([]);
            setmodal(false);
        }
    }

    function gotoplayer(movie_id){
        
            navigate(`/player/${movie_id}`);
            searchValue.current.value="";
            setmodal(false);

    }


    function logout(){
        localStorage.removeItem("nflix_user");
        navigate("/login");
    }


    
    return(
        <>

        {/* header section */}

        <header className="header_section">
            <div className="header">
                <div className="logo">MoviesHUB</div> 


                <div className="search">
                    <input type="text" ref={searchValue} placeholder="search movies" onChange={function(event){
                       searchmovie(event.target.value);

                    }}

                    onFocus={function(){
                        setmodal(true);
                    }}                  
                    />

                    <i className="fa-solid fa-magnifying-glass searching" ></i>

                    <i className="fa-regular fa-user user"onClick={function(){
                        if(logoutmodal===true){
                            setlogoutmoodal(false);
                        }
                        else{
                            setlogoutmoodal(true)
                        }
                    }}></i>

                    <h6 className="username">{username}</h6>

                    
                </div>
            </div>
            
            
        </header>


        {
            modal===false ? null:(
                <ul className="searching_box">
                    {
                        filtered.map(function(movie,index){
                            return(
                                
                                   <li key={index} onClick={function(){
                                    gotoplayer(movie._id)
                                   }}>{movie.name}</li>
                                
                            )
                        })
                    }

                </ul>

            )
        }

        {
            logoutmodal===true?(
                <div className="logging_out">
                    <ul className="log_out_lists">
                        <li>Home</li>
                        <li>Profile</li>
                        <li onClick={function(){
                            logout()
                        }}>Log out</li>
                    </ul>
                </div>

            ):null
        }
        

        </>
    
        
    );
}
export default Header;