import "./Homepage.css";

function Homepage(){

    return(
        // header section

        <>

        <header className="header_section">
             <div className="header">
                  <div className="logo">MoviesHUB</div> 


                <div className="search">
                    <input type="text" placeholder="search movies"/>

                    <i className="fa-solid fa-magnifying-glass searching" ></i>

                    <i className="fa-regular fa-user user" ></i>
                    
                </div>
             </div>
            
            
        </header>


        <section className="banner_section">
            <div className="image">

                <div className="image_details">
                    <h4>The Dark Knight</h4>

                    <p>
                    The plot follows the vigilante Batman, police lieutenant James Gordon,
                     and district attorney Harvey Dent, who form an alliance to dismantle 
                     organized crime in Gotham City. Their efforts are derailed by the Joker
                     , an anarchistic mastermind who seeks to test how far Batman will go to
                      save the city from chaos.

                    </p>

                    <button>
                        View
                    </button>

                </div>

            </div>

        </section>


        </>
        

        
    );

}
export default Homepage;