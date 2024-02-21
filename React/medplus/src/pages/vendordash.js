import { Link,Outlet } from "react-router-dom";

function VendorDashboard(){
    return (
  

        <div className="admin-dashboard">
            <div className="admin-header">
                <div className="admin-header-logo">
                   <p>vendor dashboard</p> 
                </div>

                <div className="admin-header-logout">
                  <i className="fa-regular fa-user"></i>
                  vendor

                </div>

            </div>

            <div className="admin-dashboard-options" style={{fontSize:"13px"}}>
                <div className="dashboard-options">
                    <Link to={"/vendordash/create"}>
                      <div className="dash_option options">products</div>
                    </Link>

                    <Link to={"/vendordash/select"}>
                       <div className="dash_option">Select products </div>
                    </Link>
                    
                    <div className="dash_option">customers</div>
                    <div className="dash_option">support</div>


                </div>

                <div className="dash_display">

                    <Outlet/>
                </div>


            </div>

        </div>

    );

}

export default VendorDashboard;