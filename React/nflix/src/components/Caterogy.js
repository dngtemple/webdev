import { Link } from "react-router-dom";


function Caterogy(props){


    return(
        <section className="caterogy_section" >

            <h2 className="cat_title">{props.cat_title}</h2>

            <div className="parent">

            {
                props.movies.map(function(movie,index){
                    return(
                        <div className="movie" key={index}>
                            <div className="movie_parent">
                                <img  className="movie_img" src={movie.posterURL}/>
                                <div className="movie_detail">
                                     <h4 className="movie_title">{movie.name}</h4>

                                     <div className="watch">
                                        <Link to={"/player/"+movie._id}>
                                           <button>Watch</button>

                                        </Link>

                                       <p>
                                         <i className="fa-brands fa-mdb"></i>
                                          {movie.imdbRating}
                                        </p>
                                     </div>
                                </div>

                          </div>
                        </div>

                    )

                })
            }

         </div>


            

        </section>

    );
}

export default Caterogy;