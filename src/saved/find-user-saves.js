import saves from "../data/saves.json";
import places from "../data/place.json";

const FindUserSaves = (id = 1) => {
    const userSaves = saves.filter((s) => s.userID === id);
    const savedIds = userSaves.map((s) => s.placeID);


    const savedPlaces = places.filter((p) => savedIds.includes(p.id));
    return(savedPlaces);


}

export default FindUserSaves;