import saves from "../data/saves.json";
import places from "../data/place.json";

function AllSavedPlaces () {

    const savedIds = saves.map((s) => s.placeID);
    const savedPlaces = places.filter((p) => savedIds.includes(p.id));
    return(savedPlaces);


}

export default AllSavedPlaces;