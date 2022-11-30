import NavigationSidebar from "../../navigation-sidebar";
import React from "react";
import {useNavigate} from "react-router";
import EditInfo from "./enter-info";



function EditProfile(
    {user = {"id": 1,
    "name": "John Doe",
    "dob":"2001-11-11",
    "username": "jdoe",
    "password": "password",
    "email": "jdoe@gmail.com",
    "bio": "Hi! my name is john and I love x and y"}}) {


    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `../profile`;
        navigate(path);
    }


    return(
        <div className="mt-3 row">
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={'profile'}/>
            </div>


            <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">
                <h1 className="text-info mb-3">Edit your profile</h1>

                <EditInfo user={user}/>


                <div className={"pt-3"}>
                <button type={"button"} onClick={routeChange}className={" w-100 btn btn-outline-success"} >Save</button>
                </div>
            </div>
        </div>
    );

}

export default EditProfile;