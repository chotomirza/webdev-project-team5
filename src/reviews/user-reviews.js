import React from "react";
import UserReview from "./user-review";
import DisplayUser from "../admin/display-user";

function UserReviews(reviewAndPlace) {
    reviewAndPlace = reviewAndPlace.reviewAndPlace;



    let lop = reviewAndPlace[1];
    let lor = reviewAndPlace[0];
    lop = Array.from(lop);
    lor = Array.from(lor);
    const lopr = [];
    for (let i = 0; i < lop.length; i++){
        lopr.push([lop[i], lor[i]]);
    }


    return(
        <div className="limit-visibility row">
            {
                lopr.map(pr => <UserReview pr={pr}/>)

            }


        </div>
    );

}

export default UserReviews;