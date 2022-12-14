import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunk";
import {current} from "@reduxjs/toolkit";
import {Navigate} from "react-router";
import NavigationSidebar from "../../navigation-sidebar";

const ProfileEdit = () => {
    const {currentUser} = useSelector((state) => state.users)



    const [email, setEmail] = useState(currentUser.email || "")

    const dispatch = useDispatch()
    const handleUpdatesBtn = () => {
    }

    if(!currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    return(
        <div className="mt-3 row">
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={''}/>
            </div>
            <div id='center_section' className=" col-xl-8 col-lg-9 col-md-9 col-sm-9 justify-content-center">

                <span className={"display-6 text-success"}>Change your Information</span>
                <br/>
                <h3 className={"pt-2 pb-5 text-info"}>Enter Info Below</h3>

                <div className={"text-start"}>


                    <label htmlFor={"emailInput"} className={"text-secondary"}>Email:</label>

                    <input
                        id={"emailInput"}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control mt-1"
                    placeholder="email"
                    value={email}/>


                <button
                    className="btn btn-primary w-100  mt-3"
                    onClick={handleUpdatesBtn}>
                    Update
                </button>
                </div>

            </div>
        </div>
    )
}
export default ProfileEdit