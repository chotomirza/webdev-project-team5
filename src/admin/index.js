import NavigationSidebar from "../navigation-sidebar";
import React from "react";
import {useNavigate} from "react-router";

function Admin() {
    let navigate = useNavigate();
    const routeAdminUsers = () =>{
        let path = `../admin/users`;
        navigate(path);
    }
    const routeAdminReviews = () =>{
        let path = `../admin/reviews`;
        navigate(path);
    }
    return(
        <div className="mt-3 row">
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={'profile'}/>
            </div>


            <div id='center_section' className=" col-xl-8 col-lg-9 col-md-9 col-sm-9">
              <h1>Welcome to Admin Mode</h1>
            <hr/>
              <p className={"arial-font"}>As an admin you are able to make any other user an admin.
              You may also remove any comments that are not in compliance with the page's guidelines.</p>

            <hr/>
            <br/>
            <button type={"button"} onClick={routeAdminUsers} className={"btn mb-5 w-100 btn-outline-success"}>Manage Users</button>
            <button type={"button"} onClick={routeAdminReviews} className={"btn w-100 btn-outline-success"}>Manage Reviews</button>
            </div>
        </div>
    );
}

export default Admin;