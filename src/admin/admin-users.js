
import NavigationSidebar from "../navigation-sidebar";
import React from "react";

import UserReviewsAll from "./user-reviews-all";
import {useNavigate} from "react-router";
import DisplayUsers from "./display-users";

function AdminUsers() {
    let navigate = useNavigate();
    const routeAdmin = () =>{
        let path = `../admin`;
        navigate(path);
    }


    return(
        <div className="mt-3 row">
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={'profile'}/>
            </div>


            <div id='center_section' className=" col-xl-8 col-lg-9 col-md-9 col-sm-9">
                <h1>Admin Reviews</h1>
                <hr/>
                <p className={"arial-font"}>
                    As an admin, you may declare any other user an admin</p>
                <hr/>



            </div>


            <br/>
        </div>
    );
}

export default AdminUsers;