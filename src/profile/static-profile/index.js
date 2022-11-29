import NavigationSidebar from "../../navigation-sidebar";
import React from "react";
import {FaUser} from "react-icons/fa";
import DisplayUser from "../display-user";

function StaticProfile(
    {user = {"id": 1,
        "name": "John Doe",
        "dob":"2001-11-11",
        "username": "jdoe",
        "password": "password",
        "email": "jdoe@gmail.com",
        "bio": "Hi! my name is john and I love x and y"}}) {
    return(
        <div className="mt-3 row">
        <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
            <NavigationSidebar active={'profile'}/>
        </div>


        <div id='center_section' className=" col-xl-8 col-lg-9 col-md-9 col-sm-9">
            <h3 className={"text-info"}>Hey {user.name}!</h3>
            <div className={"row pt-5"}>
                <DisplayUser user={user}/>
            </div>
            <ul className={"nav nav-pills mt-5"}>
                <li className={"nav-item"}>
                    <a className={"nav-link active"}>Saved Places</a>
                </li>
                <li className={"nav-item"}>
                    <a className={"nav-link"}>Your Reviews</a>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default StaticProfile;