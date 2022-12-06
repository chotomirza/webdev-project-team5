//import reviews from "../data/reviews.json";
//import places from "../data/place.json";
import {useSelector} from "react-redux";

const FindAllReviews = () => {

    const reviews = useSelector((state) => state.review)
    const places = useSelector((state) => state.place)

    const reviewIds = reviews.map((r) => r.placeID);


    let reviewedPlaces = [];
    for(let i = 0; i < reviewIds.length; i++){
        let placeFound = places.filter(p => p.id === reviewIds[i]);
        reviewedPlaces.push(placeFound[0]);
    }

    return ([reviews, reviewedPlaces]);
}

export default FindAllReviews;