import React from "react";

function displayUser({user={
    "id": 1,
    "name": "John Doe",
    "dob": "2001-11-11",
    "username": "jdoe",
    "password": "password",
    "email": "jdoe@gmail.com",
    "bio": "Hi! my name is john and I love x and y",
    "admin": false
}}) {
    return(
        <div className={"card mb-3"}>
            <h3>{user.name}</h3>
            <h5>@{user.username}</h5>
            <button type={"button"}  className={"btn btn-link text-success"}>Make Admin</button>

        </div>
    );
}

export default displayUser;