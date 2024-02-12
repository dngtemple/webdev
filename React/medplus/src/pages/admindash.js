import { Outlet } from "react-router-dom";

function Admindash(){
    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <div className="admin-header-logo">
                   <p>Admin Panel</p> 
                </div>

                <div className="admin-header-logout">
                  <i className="fa-regular fa-user"></i>
                  clinton templeton

                </div>

            </div>

            <div className="admin-dashboard-options">
                <div className="dashboard-options">
                    <div className="dash_option options">products</div>
                    <div className="dash_option">customers</div>
                    <div className="dash_option">vendors</div>
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