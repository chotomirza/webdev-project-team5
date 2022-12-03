import NavigationSidebar from "../navigation-sidebar";
import React from "react";
import SavedItemsAll from "../saved/saved-items-all";
import AllSavedPlaces from "../saved/all-saved-places";
import SomeSavedPlaces from "../saved/some-saved";

function Home({user}) {
    const allSaved = SomeSavedPlaces(3);

    if(user === null){
        return(
            <div className="mt-3 row">
                <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                    <NavigationSidebar active={'home'}/>
                </div>


                <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">
                    <h1 className={"display-1 text-success"}>Welcome!</h1>
                    <hr/>
                    <p>Here you can search for recipes on your favorite cocktails!<br/>
                    Be sure to leave a review on your favorite (and least favorite) recipes!</p>
                <hr/>
                    <h4 className={"display-6 text-info"}>Here's What People Are Saving:</h4>
                    <SavedItemsAll lop={allSaved}/>

                    <hr/>
                    <h4 className={"display-6 text-info"}>Here's What People Are Saying:</h4>



                </div>
            </div>
        );
    }

}

export default Home;