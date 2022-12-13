import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk, logoutThunk} from "./users-thunk";
import {useNavigate} from "react-router";
import NavigationSidebar from "../../navigation-sidebar";
import React, {useEffect} from "react";
import LoggedInStaticProfile from "../../profile/static-profile/profile-logged-in";
import DisplayUser from "../../profile/display-user";
import {findFollowersThunk, findFollowingThunk} from "../follows/follows-thunks";
import {Link} from "react-router-dom";

const Profile = () => {

    const {currentUser} = useSelector((state) => state.users)
    let uid = currentUser._id

    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }

    let navigate = useNavigate();
    const routeChange = () => {
        let path=`../profile/edit`;
        navigate(path);
    }
    const routeToAdmin = () => {
        let path=`../admin`;
        navigate(path);
    }

    const {followers, following} = useSelector((state) => state.follows)
    useEffect(() => {
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))



    }, [uid])

    return(
        <div className="mt-3 row">

            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={'profile'}/>
            </div>
            <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">

            {
                currentUser &&
                <div>

                        <h3 className={"text-info"}>Hey {currentUser.firstName}!</h3>
                        <div className={"row pt-5 mb-5"}>
                            <DisplayUser user={currentUser}/>
                        </div>

                        <div className={"row ps-2"}>
                            <button type={"button"} onClick={routeChange} className={"col-3 btn me-5 btn-outline-success"}>Edit Profile</button>
                            {currentUser.admin && <button type={"button"} onClick={routeToAdmin} className={"btn col-3 btn-outline-success"}>Admin Mode</button>}
                        </div>
                        <hr/>



                </div>

            }




            <button
                className="btn btn-danger"
                onClick={handleLogoutBtn}>
                Logout
            </button>

                <div className={"pt-5"}>


                <h2>Following : {following.length}</h2>
                <div className="list-group">
                    {
                        following && following.map((follow) =>
                            <Link to={`/profile/${follow.followed._id}`} className="list-group-item">
                                {follow.followed.username}
                            </Link>
                        )
                    }
                </div>
                <h2>Followers : {followers.length}</h2>
                <div className="list-group">
                    {
                        followers && followers.map((follow) =>
                            <Link to={`/profile/${follow.follower._id}`} className="list-group-item">
                                {follow.follower.username}
                            </Link>
                        )
                    }
                </div>
                </div>

            </div>
        </div>
    )
}
export default Profile