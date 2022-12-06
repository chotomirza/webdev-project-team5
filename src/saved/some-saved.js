import saves from "../data/saves.json";
import places from "../data/place.json";

function SomeSavedPlaces (howMany = 3) {

    const savedIds = saves.map((s) => s.placeID);
    let savedPlaces = places.filter((p) => savedIds.includes(p.id));


    if(savedPlaces.length > howMany){

        savedPlaces = savedPlaces.slice(0, howMany);
    }

    return savedPlaces;


}

export default SomeSavedPlaces;