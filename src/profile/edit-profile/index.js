import NavigationSidebar from "../../navigation-sidebar";
import React from "react";

function EditProfile(
    {user = {"id": 1,
    "name": "John Doe",
    "dob":"2001-11-11",
    "username": "jdoe",
    "password": "password",
    "email": "jdoe@gmail.com",
    "bio": "Hi! my name is john and I love x and y"}}) {

    return(
        <div className="mt-3 row">
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={'profile'}/>
            </div>


            <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">
                <h3 className="mb-3">Edit your profile</h3>

                <form className={"card pt-3 ps-3 pb-3 text-bg-dark bg-gradient"}>
                <div className={"form-group row text-start"}>
                <label for={"text-fields-name"} className={"col-sm-2 col-form-label"}>Name:</label>
                <input id="text-fields-name" className={"form-control w-50"} value={user.name}/><br/>
               </div>
               <div className={"pt-2 form-group row text-start"}>
                   <label for={"text-fields-dob"} className={"col-sm-2 col-form-label"}>Birthday:</label>
                   <input type={"date"} id={"text-fields-dob"}className={"form-control w-50"}
                          value={user.dob}/>

               </div>
                    <div className={"pt-2 form-group row text-start"}>
                        <label for={"text-fields-username"} className={"col-sm-2 col-form-label"}>Username:</label>
                        <input id="text-fields-username"  title="Username cannot exceed 16 characters" className={"form-control w-50"} value={user.username}/><br/>
                    </div>
                    <div className={"pt-2 form-group row text-start"}>
                        <label htmlFor={"text-fields-password"} className={"col-sm-2 col-form-label"}>Password:</label>
                        <input id="text-fields-password" title="Your password must be 8 characters"
                               className={"form-control w-50"} value={user.password}/><br/>
                    </div>

                </form>

            </div>
        </div>
    );

}

export default EditProfile;