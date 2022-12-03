import reviews from "../data/reviews.json";
import places from "../data/place.json";

const FindAllReviews = () => {


    const reviewIds = reviews.map((r) => r.placeID);


    let reviewedPlaces = [];
    for(let i = 0; i < reviewIds.length; i++){
        let placeFound = places.filter(p => p.id === reviewIds[i]);
        reviewedPlaces.push(placeFound[0]);
    }


    return([reviews, reviewedPlaces]);
}

export default FindAllReviews;