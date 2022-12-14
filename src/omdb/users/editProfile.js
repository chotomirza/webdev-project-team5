import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunk";
import {current} from "@reduxjs/toolkit";
import {Navigate} from "react-router";
import NavigationSidebar from "../../navigation-sidebar";

const ProfileEdit = () => {
    const {currentUser} = useSelector((state) => state.users)



    const [username, setUsername] = useState(currentUser.username || "")
    const [password, setPassword] = useState(currentUser.password || "")
    const [firstName, setFirstName] = useState(currentUser.firstName || "")
    const [lastName, setLastName] = useState(currentUser.lastName || "")
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
                <label for={"usernameInput"} className={"text-secondary"}>Username:</label>
                <input
                    id={"usernameInput"}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    placeholder="username"
                    value={username}/>

                    <label htmlFor={"passwordInput"} className={"text-secondary"}>Password:</label>
                <input
                    id={"passwordInput"}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control mt-1"
                    placeholder="password"
                    type="password"
                    value={password}/>

                    <label htmlFor={"fnameInput"} className={"text-secondary"}>First Name:</label>

                    <input
                        id={"fnameInput"}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-control mt-1"
                    placeholder="first name"
                    value={firstName}/>

                    <label htmlFor={"lnameInput"} className={"text-secondary"}>Last Name:</label>

                    <input
                        id={"lnameInput"}
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-control mt-1"
                    placeholder="last name"
                    value={lastName}/>

                    <label htmlFor={"emailInput"} className={"text-secondary"}>Password:</label>

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