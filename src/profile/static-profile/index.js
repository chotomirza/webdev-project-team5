import NavigationSidebar from "../../navigation-sidebar";
import React from "react";

function StaticProfile() {
    return(
        <div className="mt-3 row">
        <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
            <NavigationSidebar active={'profile'}/>
        </div>


        <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">
            <h5>profile</h5>
        </div>
    </div>
    );
}

export default StaticProfile;