import SavedItem from "./saved-item";
import React from "react";

function SavedItems({lop = new Array()}) {
    lop = Array.from(lop);
    return(
    <div className="limit-visibility row">

        {lop.map(place =>
                <SavedItem
                    place={place}/> )}

    </div>


    );
}

export default SavedItems;