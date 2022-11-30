import NavigationSidebar from "../../navigation-sidebar";
import React from "react";
import DisplayUser from "../display-user";
import FindUserSaves from "../../saved/find-user-saves";
import SavedItems from "../../saved/saved-items";
import FindUserReviews from "../../reviews/find-user-reviews";
import UserReviews from "../../reviews/user-reviews";
import {useNavigate} from "react-router";
import StaticProfileLoggedOut from "./profile-logged-out";
import LoggedInStaticProfile from "./profile-logged-in";





function StaticProfile(
    {user}) {


    if(user === null){
        return(<StaticProfileLoggedOut/>);
    }
    else{
        return(<LoggedInStaticProfile user={user}/>);
    }
}

export default StaticProfile;