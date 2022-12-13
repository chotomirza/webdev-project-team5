import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunk";
import {current} from "@reduxjs/toolkit";
import {Navigate} from "react-router";
import NavigationSidebar from "../../navigation-sidebar";

const Register = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        dispatch(registerThunk({username, password, firstName, lastName, email}))
    }

    if(currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    return(
        <div className="mt-3 row">
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={''}/>
            </div>
            <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9 justify-content-center">

            <span className={"display-6 text-success"}>Hey! We're so excited to have you!</span>
                <br/>
                <h3 className={"pt-2 pb-5 text-info"}>Register Below</h3>

            <input
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="username"
                value={username}/>
            <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="password"
                type="password"
                value={password}/>
            <input
                onChange={(e) => setFirstName(e.target.value)}
                className="form-control"
                placeholder="first name"
                value={firstName}/>
            <input
                onChange={(e) => setLastName(e.target.value)}
                className="form-control"
                placeholder="last name"
                value={lastName}/>
            <input
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="email"
                value={email}/>
            <button
                className="btn btn-primary w-100"
                onClick={handleRegisterBtn}>
                Register
            </button>
            {
                currentUser &&
                <h1>Welcome new user: {currentUser.username}</h1>
            }
            </div>
        </div>
    )
}
export default Register