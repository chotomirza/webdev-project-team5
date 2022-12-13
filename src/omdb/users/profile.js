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
        <div className="mt-3 row">

            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={'profile'}/>
            </div>
            <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">

            {
                currentUser &&
                <div>
                    <span className={"display-3 text-info"}>Welcome {currentUser.firstName}! </span>
                    <br/>
                    uesrname@{currentUser.username}
                </div>

            }


            <h2>Password: {currentUser.password}</h2>



            <button
                className="btn btn-danger"
                onClick={handleLogoutBtn}>
                Logout
            </button>
            </div>
        </div>
    )
}
export default Profile