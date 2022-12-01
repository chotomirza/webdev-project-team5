import NavigationSidebar from "../navigation-sidebar";
import React from "react";
import FindUserSaves from "./find-user-saves";
import Login from "../login";
import places from "../data/place.json";
import saves from "../data/saves.json"
import {useNavigate} from "react-router";
import SavedItems from "./saved-items";

function AllSavedPlaces () {

    const savedIds = saves.map((s) => s.placeID);
    const savedPlaces = places.filter((p) => savedIds.includes(p.id));
    return(savedPlaces);


}

function SavedLoggedOut() {

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `../log`;
        navigate(path);
    }

    const allSaved = AllSavedPlaces();
    const notTrue = false;

    return(
        <div className="mt-3 row">
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={'saved'}/>
            </div>


            <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">
               <h1>Saved Places</h1>
                Hey user! If you want to save places for you to come back to later
                <button type={"button"} onClick={routeChange}className={" btn text-success btn-link"} >Login Here</button>
                <br/>

                In the meantime, here are the places that other users have saved

                <SavedItems lop={allSaved}/>

            </div>
        </div>
    );
}

export default SavedLoggedOut;