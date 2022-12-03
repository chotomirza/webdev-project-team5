import React from "react";
import UserReview from "./user-review";

function UserReviews({lop = []},
                     {lor = []}) {
    lop = Array.from(lop);
    lor = Array.from(lor);
    const lopr = [];
    for (let i = 0; i < lop.length; i++){
        lopr.push([lop[i], lor[i]]);
    }

    return(
        <div className="limit-visibility row">
            {
                lopr.map(pr => <UserReview place={pr[0]} review={pr[1]}/>)

            }


        </div>
    );

}

export default UserReviews;