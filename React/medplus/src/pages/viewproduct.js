import { Link } from "react-router-dom";

function Viewproduct(){
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


            <h5>products</h5>    

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                    </tr>

                </thead>

                <tbody>
                    <tr>
                        <td>#</td>
                        <td>name</td>
                        <td>category</td>
                        <td>price</td>
                        <td>ction</td>
                    </tr>

                </tbody>
            </table>       
                
                 

        </div>
    );
}

export default Viewproduct;