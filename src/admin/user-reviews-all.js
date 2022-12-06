import React from "react";
import UserReview from "../reviews/user-review";
import ReviewCanDelete from "./review-can-delete";

function UserReviewsAll(blopr) {


    let lop = blopr.lop;
    let lor = blopr.lor;


    lop = Array.from(lop);
    lor = Array.from(lor);
    const lopr = [];
    for (let i = 0; i < lop.length; i++){
        lopr.push([lop[i], lor[i]]);
    }

    return(
        <div className="row">
            {
                lopr.map(pr => <ReviewCanDelete pr={pr}/>)

            }


        </div>
    );

}

export default UserReviewsAll;