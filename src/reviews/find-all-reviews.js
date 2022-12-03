//import reviews from "../data/reviews.json";
//import places from "../data/place.json";
import {useSelector} from "react-redux";

const FindAllReviews = () => {

    const reviews = useSelector((state) => state.review)
    const places = useSelector((state) => state.place)

    const reviewIds = reviews.map((r) => r.placeID);

    const reviewedPlaces = places.filter((p) => reviewIds.includes(p.id));

    return ([reviews, reviewedPlaces]);
}

export default FindAllReviews;