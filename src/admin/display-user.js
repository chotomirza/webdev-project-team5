import React from "react";
import {useNavigate} from "react-router";

function DisplayUser({user}) {

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `../profile/`+user.id;
        navigate(path);
    }
    return(
        <div className={"card mb-3"}>
            <h3>{user.name}</h3>
            <h5 onClick={routeChange}>@{user.username}</h5>
            <button type={"button"}  className={"btn btn-link text-success"}>Make Admin</button>

        </div>
    );
}

export default DisplayUser;