// import reviews from "../data/reviews.json";
// import places from "../data/place.json";
// import {useSelector} from "react-redux";
//
// const FindUserReviews = ({id = 1}) => {
//
//     //const reviews = useSelector((state) => state.review)
//     //const places = useSelector((state) => state.place)
//
//     const userReviews = reviews.filter((r) => r.userID === id);
//     const reviewIds = userReviews.map((r) => r.placeID);
//
//     let reviewedPlaces = [];
//     for(let i = 0; i < reviewIds.length; i++){
//         let placeFound = places.filter(p => p.id === reviewIds[i]);
//         reviewedPlaces.push(placeFound);
//     }
//
//     return ([userReviews, reviewedPlaces]);
// }
//
// export default FindUserReviews;