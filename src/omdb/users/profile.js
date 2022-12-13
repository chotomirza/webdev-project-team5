import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./users-thunk";
import {useNavigate} from "react-router";
import NavigationSidebar from "../../navigation-sidebar";
import React from "react";

const Profile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }
    return(
        <>
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={'profile'}/>
            </div>

            <h1>Profile</h1>
            {
                currentUser &&
                <h2>Welcome new user: {currentUser.username}</h2>

            }

            {/*<h2>Password: {currentUser.password}</h2>*/}



            <button
                className="btn btn-danger"
                onClick={handleLogoutBtn}>
                Logout
            </button>
        </>
    )
}
export default Profile