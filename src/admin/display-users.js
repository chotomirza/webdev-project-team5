import React from "react";
import UserReview from "../reviews/user-review";
//import users from "../data/users.json"
import ReviewCanDelete from "./review-can-delete";
import DisplayUser from "./display-user";
import {useSelector} from "react-redux";

function DisplayUsers() {
    const users = useSelector((state) => state.user)

    return(
        <div className="row">
            {
                users.map(u => <DisplayUser user={u}/>)

            }


        </div>
    );

}

export default DisplayUsers;