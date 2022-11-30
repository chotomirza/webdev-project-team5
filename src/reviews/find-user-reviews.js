import reviews from "../data/reviews.json";
import places from "../data/place.json";
const FindUserReviews = ({id= 1}) => {


    const userReviews = reviews.filter((r) => r.userID === id);
    const reviewIds = userReviews.map((r) => r.placeID);

    const reviewedPlaces = places.filter((p) => reviewIds.includes(p.id));

    return([userReviews, reviewedPlaces]);
}

export default FindUserReviews;