import Caterogy from "../components/Caterogy";
import Header from "../components/Header";
import "./Homepage.css";

function Homepage(){

    return(
        

        <>
  
        {/* header */}

        <Header/>        

       {/* banner section */}
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
                        Watch Now
                    </button>

                </div>

            </div>

        </section>

        {/* caterogy section */}

        <Caterogy cat_title="Top Trending"/>

        <Caterogy cat_title="Action Movies"/>

        <Caterogy cat_title="Drama"/>
       


        </>
        

        
    );

}
export default Homepage;