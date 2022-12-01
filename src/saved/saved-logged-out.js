import NavigationSidebar from "../navigation-sidebar";
import React from "react";
import {useNavigate} from "react-router";

import SavedItemsAll from "./saved-items-all";
import AllSavedPlaces from "./all-saved-places";



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

                <SavedItemsAll lop={allSaved}/>

            </div>
        </div>
    );
}

export default SavedLoggedOut;
