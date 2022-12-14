import {useNavigate, useParams} from "react-router";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteUserThunk, findUserByIdThunk} from "./users-thunk";
// import {findReviewsByAuthor} from "../reviews/reviews-service";
// import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {BsTrash} from "react-icons/bs";
import {Link} from "react-router-dom";
import {findFollowersThunk, findFollowingThunk, followUserThunk} from "../follows/follows-thunks";
import NavigationSidebar from "../../navigation-sidebar";

const PublicProfile = () => {
    const {uid} = useParams()
    const {currentUser} = useSelector((state) => state.users)
    const displayFollow = !(currentUser == null)





    let navigate = useNavigate();
    const routeLogin = () => {
        navigate(`../login`)
    }



    const {publicProfile} = useSelector((state) => state.users)

    const {followers, following} = useSelector((state) => state.follows)

    console.log(followers)
    const isFollow = () => {
        if(displayFollow){
            console.log(followers)
           let filteredF =  followers.filter(user => user.follower._id === currentUser._id);

            return filteredF.length <= 0;
        }
    }

    let isNotFollowing = isFollow();


    const dispatch = useDispatch()

    const deleteUserHandler = (id) => {
        dispatch(deleteUserThunk(id));
    }
    const newFollow = {
        followed:uid,
        follower:""
    }
    if(displayFollow){
        newFollow.follower = currentUser._id
    }



    const handleFollowBtn = () => {

        dispatch(followUserThunk(newFollow))
    }
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        // dispatch(findReviewsByAuthorThunk(uid))
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))



    }, [uid])

    console.log(currentUser)
    return(
        <div className="mt-3 row">
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={'users'}/>
            </div>


            <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9 justify-content-center">
                <div className={"display-3 text-info"}>@{publicProfile && publicProfile.username}</div>

                <div classname={"text-center row "}>
                {isNotFollowing && displayFollow   && <button
                    onClick={handleFollowBtn}
                    type={"button"}
                    className="btn btn-success">
                    Follow
                </button>}
                    {displayFollow && !isNotFollowing && <span className={"text-success"}>You are following this user</span>}


                </div>
                <div className={"text-center row "}>
                {displayFollow || <button
                    onClick={routeLogin}
                    type={"button"}

                    className=" btn btn-transparent text-primary">
                    Please click here to login in order to follow users!
                </button>}
                </div>
                <div className={"row pt-2"}>
                    <hr/>



                <h2>Following: {following.length}</h2>
                <div className="list-group">
                    {
                        following && following.map((follow) =>
                            <Link to={`/profile/${follow.followed._id}`} className="list-group-item">
                                {follow.followed.username}
                            </Link>
                        )
                    }
                </div>
                <h2>Followers: {followers.length}</h2>
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

export default PublicProfile