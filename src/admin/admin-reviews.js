
import NavigationSidebar from "../navigation-sidebar";
import React from "react";
import findAllReviews from "../reviews/find-all-reviews";
import FindAllReviews from "../reviews/find-all-reviews";
import UserReviewsAll from "./user-reviews-all";
import {useNavigate} from "react-router";

function AdminReviews() {
    let navigate = useNavigate();
    const routeAdmin = () =>{
        let path = `../admin`;
        navigate(path);
    }

    const allReviews = findAllReviews();
    console.log(allReviews)

    return(
        <div className="mt-3 row">
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={'profile'}/>
            </div>


            <div id='center_section' className=" col-xl-8 col-lg-9 col-md-9 col-sm-9">
                <h1>Admin Reviews</h1>
                <hr/>
                <p className={"arial-font"}>
                    As an admin may remove any comments that are not in compliance with the page's guidelines.</p>
                <hr/>
                <UserReviewsAll lop={allReviews[1]} lor={allReviews[0]}/>
            </div>

            <button type={"button"} onClick={routeAdmin} className={"mt-5 btn btn-link text-success"}>Back</button>

            <br/>
        </div>
    );
}

export default AdminReviews;