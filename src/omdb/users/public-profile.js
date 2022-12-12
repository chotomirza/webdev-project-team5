import {useParams} from "react-router";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "./users-thunk";
import {findReviewsByAuthor} from "../reviews/reviews-service";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {Link} from "react-router-dom";
import {findFollowersThunk, findFollowingThunk, followUserThunk} from "../follows/follows-thunks";
import NavigationSidebar from "../../navigation-sidebar";

const PublicProfile = () => {
    const {uid} = useParams()
    const {publicProfile} = useSelector((state) => state.users)

    const {followers, following} = useSelector((state) => state.follows)
    const dispatch = useDispatch()
    const handleFollowBtn = () => {
        dispatch(followUserThunk({
            followed: uid
        }))
    }
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        dispatch(findReviewsByAuthorThunk(uid))
        dispatch

    }, [uid])

    console.log(publicProfile)
    return(
        <div className="mt-3 row">
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={'users'}/>
            </div>


            <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">
                <button
                    onClick={handleFollowBtn}
                    className="btn btn-success float-end">
                    Follow
                </button>
                <h1>{publicProfile && publicProfile.username}</h1>

                <h2>Following</h2>
                <div className="list-group">
                    {
                        following && following.map((follow) =>
                            <Link to={`/profile/${follow.followed._id}`} className="list-group-item">
                                {follow.followed.username}
                            </Link>
                        )
                    }
                </div>
                <h2>Followers</h2>
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


    )
}

export default PublicProfile