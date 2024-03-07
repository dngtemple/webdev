import image from "../images/pexels-andrea-piacquadio-3778603.jpg"
import image1 from "../images/pexels-ebenezer-opokuware-5285646.jpg"
import image2 from "../images/pexels-pixabay-262391.jpg"
import image3 from  "../images/pexels-antoni-shkraba-production-8837543.jpg"
import image4 from  "../images/pexels-italo-melo-2379004.jpg"
import image5 from  "../images/pexels-kikisuhu-samuel-8249042.jpg"
import image6 from  "../images/pexels-sagar-kumar-5323029.jpg"
import image7 from  "../images/pexels-rdne-stock-project-10376206.jpg"
import image8 from  "../images/pexels-pixabay-415829.jpg"
import image9 from  "../images/pexels-mwabonje-ringa-1350568.jpg"

export default function Leader() {
  return (
    <section className="leader_section">

        {/* <h3 style={{textAlign:"center"}}>Our Leadershi</h3> */}
        <div className="leader">
            <div className="lead">
                <img src={image} style={{height:"70%", width:"100%"}}/>

                <h4>Palmer Shollington</h4>

                <p>Director</p>
            </div>
            <div className="lead">
                <img src={image1} style={{height:"70%", width:"100%"}}/>

                <h4>Lordina Maddi</h4>

                <p>Pharmacist</p>
            </div>
            <div className="lead">
                <img src={image2} style={{height:"70%", width:"100%"}}/>

                <h4>Alves Patter</h4>

                <p>Director</p>
            </div>
            <div className="lead">
                <img src={image3} style={{height:"70%", width:"100%"}}/>

                <h4>John Greg</h4>

                <p>Lab Technician</p>
            </div>
            <div className="lead">
                <img src={image4} style={{height:"70%", width:"100%"}}/>

                <h4>Eric Shole</h4>

                <p>Manager</p>
            </div>
            <div className="lead">
                <img src={image5} style={{height:"70%", width:"100%"}}/>

                <h4>Hannah Markiter</h4>

                <p>Co-ordinator</p>
            </div>
            <div className="lead">
                <img src={image6} style={{height:"70%", width:"100%"}}/>

                <h4>Blaks Johnson</h4>

                <p>Accountant</p>
            </div>
            <div className="lead">
                <img src={image7} style={{height:"70%", width:"100%"}}/>

                <h4>Ben Katto</h4>

                <p>Consultant</p>
            </div>
            <div className="lead">
                <img src={image8} style={{height:"70%", width:"100%"}}/>

                <h4>Mary Booth</h4>

                <p>Pharmacist</p>
            </div>
            <div className="lead">
                <img src={image9} style={{height:"70%", width:"100%"}}/>

                <h4>Palmer Jessica</h4>

                <p>Lab Technician</p>
            </div>

        </div>

    </section>
  )
}
