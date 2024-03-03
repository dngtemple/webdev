import { Link, Outlet } from "react-router-dom";

function Admindash(){
    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <div className="admin-header-logo">
                   <p style={{color:"white"}}>Admin Panel</p> 
                </div>

                <div className="admin-header-logout">
                  <i className="fa-regular fa-user"></i>
                  clinton templeton

                </div>

            </div>

            <div className="admin-dashboard-options" style={{fontSize:"13px"}}>
                <div className="dashboard-options">
                    <Link to={"/admindash/create"}>
                      <div className="dash_option options">products</div>
                    </Link>
                    
                    <div className="dash_option">customers</div>

                    <Link to={"/admindash/vendors"}>
                       <div className="dash_option">vendors</div>
                    </Link>
                    
                    <div className="dash_option">support</div>
                    <div className="dash_option">prescription</div>

                </div>

                <div className="dash_display">

                    <Outlet/>
                </div>


            </div>

        </div>
    )
};

export default Admindash;