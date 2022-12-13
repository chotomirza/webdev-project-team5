import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findAllUsersThunk} from "./users-thunk";
import NavigationSidebar from "../../navigation-sidebar";
import {useNavigate} from "react-router";

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
            {/*todo: change layout*/}
            <div className={"row"}>
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={'users'}/>
            </div>
            <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">


            {/*<h1>Number of Users: {users.length}</h1>*/}
                <h1>List of Users:</h1>
            <ul className="list-group">
                {
                    users.map((user) =>
                    <li key={user._id} className="list-group-item">
                        <a href={"/users/" + user._id}>
                            {user.username}
                        </a>
                    </li>
                    )
                }
            </ul>
            </div>
            </div>

        </>
    )
}

export default Users