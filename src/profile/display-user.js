import {FaUser} from "react-icons/fa";
import React from "react";

function DisplayUser ({user}) {
    return (
        <>
        <div className={"justify-content-center ps-4 col-4"}>
            <FaUser size={100} color={"navy"}/>
            <span className={"text-lg-center"}> @{user.username}</span>
        </div>
    <div className={"ps-5 col-8"}>
        <div className={"row"}>
            <div className={"text-start col-6 text-secondary"}>Name:</div>
            <div className={"text-start col-6"}>{user.name}</div>
        </div>
        <div className={"row"}>
            <div className={"text-start col-6 text-secondary"}>Birthday:</div>
            <div className={"text-start col-6"}>{user.dob}</div>
        </div>
        <div className={"row"}>
            <div className={"text-start col-6 text-secondary"}>Email:</div>
            <div className={"text-start col-6"}>{user.email}</div>
        </div>
        <div className={"pt-3 row"}>
            <div className={"text-start col-6 text-secondary"}>About you:</div>
            <div className={"text-start col-6"}>{user.bio}</div>
        </div>

    </div>
 </>
    );
}

export default DisplayUser;