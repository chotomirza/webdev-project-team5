import React from "react";
import UserReview from "../reviews/user-review";
import ReviewCanDelete from "./review-can-delete";

function UserReviewsAll({lop = []},
                     {lor = []}) {

    lop = Array.from(lop);
    lor = Array.from(lor);
    const lopr = [];
    for (let i = 0; i < lop.length; i++){
        lopr.push([lop[i], lor[i]]);
    }

    return(
        <div className="row">
            {
                lopr.map(pr => <ReviewCanDelete place={pr[0]} review={pr[1]}/>)

            }


        </div>
    );

}

export default UserReviewsAll;