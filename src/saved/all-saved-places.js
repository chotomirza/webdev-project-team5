import saves from "../data/saves.json";
import {useSelector} from "react-redux";
import places from "../data/place.json";

function AllSavedPlaces() {
    //const places = useSelector((state) => state.place)
    //const saves = useSelector((state) => state.saved)
    const savedIds = saves.map((s) => s.placeID);
    const savedPlaces = places.filter((p) => savedIds.includes(p.id));
    return (savedPlaces);

}

export default AllSavedPlaces;