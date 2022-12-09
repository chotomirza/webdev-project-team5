import saves from "../data/saves.json";
import {useSelector} from "react-redux";
import places from "../data/place.json";

const FindUserSaves = (id = 1) => {
    //const places = useSelector((state) => state.place)
    //const saves = useSelector((state) => state.saved)
    const userSaves = saves.filter((s) => s.userID === id);
    const savedIds = userSaves.map((s) => s.placeID);

    const savedPlaces = places.filter((p) => savedIds.includes(p.id));
    return (savedPlaces);

}

export default FindUserSaves;