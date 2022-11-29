
import React from "react";

function EditInfo ({user = {"id": 1,
    "name": "John Doe",
    "dob":"2001-11-11",
    "username": "jdoe",
    "password": "password",
    "email": "jdoe@gmail.com",
    "bio": "Hi! my name is john and I love x and y"}})  {

    return(
        <form className={"card pt-3 ps-3 pb-3 text-bg-dark bg-gradient"}>
            <div className={"form-group row text-start"}>
                <label htmlFor={"text-fields-name"} className={"col-lg-2 col-form-label"}>Name:</label>
                <input id="text-fields-name" className={"form-control w-50"} value={user.name}/><br/>
            </div>
            <div className={"pt-2 form-group row text-start"}>
                <label htmlFor={"text-fields-dob"} className={"col-lg-2 col-form-label"}>Birthday:</label>
                <input type={"date"} id={"text-fields-dob"} className={"form-control w-50"}
                       value={user.dob}/>

            </div>
            <div className={"pt-2 form-group row text-start"}>
                <label htmlFor={"text-fields-username"} className={"col-lg-2 col-form-label"}>Username:</label>
                <input id="text-fields-username" title="Username cannot exceed 16 characters"
                       className={"form-control w-50"} value={user.username}/><br/>
            </div>
            <div className={"pt-2 form-group row text-start"}>
                <label htmlFor={"text-fields-password"} className={"col-lg-2 col-form-label"}>Password:</label>
                <input type="password" id="text-fields-password" title="Your password must be 8 characters"
                       className={"form-control w-50"} value={user.password}/><br/>
            </div>
            <div className={"pt-2 form-group row text-start"}>
                <label htmlFor={"text-fields-email"} className={"col-lg-2 col-form-label"}>Email:</label>
                <input id="text-fields-email"
                       className={"form-control w-50"} value={user.email}/><br/>
            </div>

        </form>
    );

}
export default EditInfo;