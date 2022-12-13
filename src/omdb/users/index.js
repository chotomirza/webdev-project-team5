import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findAllUsersThunk} from "./users-thunk";
import NavigationSidebar from "../../navigation-sidebar";
import {useNavigate} from "react-router";
import DisplayUserPublic from "../../profile/generic-user/display-user-public";
import ShowUser from "./show-user";

const Users = () => {
    let navigate = useNavigate();
    const routeChange = (uid) =>{
        let path = `../profile/`+uid;
        navigate(path);
    }


    const {users, loading} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])

    return(
        <>
=
            <div className={"row"}>
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={'users'}/>
            </div>
            <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">



            <span className={"display-2 text-info"}>Users</span>
            <ul className="text-start list-group">
                {
                    users.map((user) =>
                    <ShowUser user={user}/>)
                }
            </ul>

            </div>
            </div>

        </>
    )
}

export default Users