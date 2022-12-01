import SavedItem from "./saved-item";
import React from "react";

function SavedItemsAll({lop = new Array()}) {
    lop = Array.from(lop);

    return(<div className={'row'}>

        {lop.map(place =>
            <SavedItem
                place={place}/> )}

    </div>);


}

export default SavedItemsAll;