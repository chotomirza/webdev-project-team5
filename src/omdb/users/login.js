import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunk";
import {Navigate, useNavigate} from "react-router";
import NavigationSidebar from "../../navigation-sidebar";

const Login = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const routeSignUp = () => {
        navigate(`../register`)
    }
    const handleLoginBtn = () => {
        try {
            dispatch(loginThunk({username, password}))
            // navigate('/profile')
        } catch (e) {

        }
    }
    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }
    return(

        <div className="mt-3 row">
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={''}/>
            </div>
            <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">

            <span className={"display-3 text-info"}>Login</span>
            <input
                onChange={(e) => setUsername(e.target.value)}
                className="form-control arial-font"
                placeholder="username"
                value={username}/>
            <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control" placeholder="password" type="password" value={password}/>
            <br/>
                <button
                className=" btn btn-success w-100"
                onClick={handleLoginBtn}>Login</button>


                <button className={"btn btn-outline text-primary w-100"} onClick={routeSignUp}>Don't have an account? Sign up here</button>

            </div>
        </div>

    )
}
export default Login