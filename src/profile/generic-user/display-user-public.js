import {useParams} from 'react-router-dom'
import users from "../../data/users.json";
import NavigationSidebar from "../../navigation-sidebar";
import React from "react";
import DisplayUser from "../display-user";
import SavedItems from "../../saved/saved-items";
import UserReviews from "../../reviews/user-reviews";
import {FaUser} from "react-icons/fa";
import FindUserSaves from "../../saved/find-user-saves";
import FindUserReviews from "../../reviews/find-user-reviews";

function findUser(uid) {

    const found = users.filter(u => u.id === uid);

    if (found.length == 0){
        return(null);
    }
    else{
        return(found[0]);
    }
}



function DisplayUserPublic() {
    const user = useParams().user;
    console.log("here");


    const fullUser = findUser(Number(user));


    let savedPlaces = [];
    let reviewAndPlaces = [];
    let reviews = [];
    let reviewedPlaces = [];

    if(!(fullUser === null)) {
        console.log('trying')
        savedPlaces = FindUserSaves(fullUser.id);
         reviewAndPlaces = FindUserReviews(fullUser.id);
         reviews = reviewAndPlaces[0];
         reviewedPlaces = reviewAndPlaces[1];
    }


if(fullUser === null){
    return(
        <div className="mt-3 row">
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={''}/>
            </div>


            <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">
                <h1 className={"text-success"}>User Not Found </h1>
            </div>
        </div>

            );
}
else{
    return(
        <div className="mt-3 row">
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={''}/>
            </div>


            <div id='center_section' className=" col-xl-8 col-lg-9 col-md-9 col-sm-9">
                <h3 className={"text-info"}>{fullUser.name}</h3>
                <div className={"row"}>
                <div className={"justify-content-center ps-4 col-4"}>
                    <FaUser size={100} color={"navy"}/>
                    <span className={"text-lg-center"}> @{fullUser.username}</span>
                </div>
                <div className={"ps-5 pt-5 col-8"}>

                        <div className={"text-start col-6 text-secondary"}>Bio:</div>
                        <div className={"text-start col-6"}>{fullUser.bio}</div>


                </div>
            </div>


                <hr/>
                <div className={"pt-5"}>
                    <div className={"pb-5"}>
                        <h4 className={"text-start pb-2 "}>Saved Places</h4>
                        <SavedItems lop={savedPlaces}/>

                    </div>
                    <hr/>
                    <div>
                        <h4 className={"text-start pt-5"}>Reviews</h4>
                        <UserReviews reviewAndPlace={reviewAndPlaces}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
}

export default DisplayUserPublic;