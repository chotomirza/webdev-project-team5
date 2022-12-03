import NavigationSidebar from "../../navigation-sidebar";
import React from "react";
import DisplayUser from "../display-user";
import FindUserSaves from "../../saved/find-user-saves";
import SavedItems from "../../saved/saved-items";
import FindUserReviews from "../../reviews/find-user-reviews";
import UserReviews from "../../reviews/user-reviews";
import {useNavigate} from "react-router";





function LoggedInStaticProfile(
    {user}) {

    const savedPlaces = FindUserSaves(user.id);
    const reviewAndPlaces = FindUserReviews(user.id);
    const reviews = reviewAndPlaces[0];
    const reviewedPlaces = reviewAndPlaces[1];

    let navigate = useNavigate();
    const routeChange = () => {
        let path=`../profile/edit`;
        navigate(path);
    }
    const routeToAdmin = () => {
        let path=`../admin`;
        navigate(path);
    }

    return(
        <div className="mt-3 row">
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={'profile'}/>
            </div>


            <div id='center_section' className=" col-xl-8 col-lg-9 col-md-9 col-sm-9">
                <h3 className={"text-info"}>Hey {user.name}!</h3>
                <div className={"row pt-5 mb-5"}>
                    <DisplayUser user={user}/>
                </div>

                <div className={"row ps-2"}>
                <button type={"button"} onClick={routeChange} className={"col-3 btn me-5 btn-outline-success"}>Edit Profile</button>
                <button type={"button"}  className={"btn col-3 me-5 btn-outline-success"}>Logout</button>

                {user.admin && <button type={"button"} onClick={routeToAdmin} className={"btn col-3 btn-outline-success"}>Admin Mode</button>}
                </div>
                <hr/>
                <div className={"pt-5"}>
                    <div className={"pb-5"}>
                        <h4 className={"text-start pb-2 "}>Your Saved Places</h4>
                        <SavedItems lop={savedPlaces}/>

                    </div>
                    <hr/>
                    <div>
                        <h4 className={"text-start pt-5"}>Your Reviews</h4>
                        <UserReviews lop={reviewedPlaces} lor={reviews}/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LoggedInStaticProfile;