function Caterogy(props){
    return(
        <section className="caterogy_section">

            <h2 className="cat_title">{props.cat_title}</h2>

            <div className="movie">
                <div className="movie_img">
                    <div className="movie_detail">
                        <h4 className="movie_title">American Star</h4>

                        <div className="watch">
                            <button>Watch</button>

                            <p>
                               <i class="fa-brands fa-mdb"></i>
                                  8.5
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>

    );
}

export default Caterogy;