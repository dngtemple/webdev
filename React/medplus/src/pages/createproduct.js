import { Link } from "react-router-dom";

function Createproduct(){
    return (
        <div className="panel">

            <div className="panel-links">
                <ul className="nav">
                    <Link to={"/admindash/create"}>
                      <li className="nav-link">create</li>
                    </Link>

                    <Link to={"/admindash/view"}>
                     <li className="nav-link">view</li>
                    </Link>
                    <li className="nav-link">export</li>
                    <li className="nav-link">overview</li>

                </ul>
            </div>


            <h5>create product</h5>

            <div className="panel_inputs">
                <input type="text" placeholder="Enter name" className="form-control"/>
                <input type="Number" placeholder="Enter price"className="form-control"/>
                <input type="text" placeholder="Enter description"className="form-control"/>
                <input type="file" className="form-control"/>
                <select className="form-control">
                    <option>choose category</option>
                </select>

                <select className="form-control">
                    <option>choose tags</option>
                </select>


                <div>
                Approved
                <input type="checkbox"/>
                
                Prescriped
                <input type="checkbox"/>

                </div>
                
                

            </div>

        </div>
    );
}

export default Createproduct;