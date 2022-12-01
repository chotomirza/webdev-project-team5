import reviews from "../data/reviews.json";
import places from "../data/place.json";

const FindAllReviews = () => {


    const reviewIds = reviews.map((r) => r.placeID);

    const reviewedPlaces = places.filter((p) => reviewIds.includes(p.id));


    return([reviews, reviewedPlaces]);
}

export default FindAllReviews;