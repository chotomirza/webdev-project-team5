// import places from "../data/place.json"
// import users from "../data/users.json"
// import reviews from "../data/reviews.json";
//
// function GetPlaceReviews(placeId) {
//
//
//
//         const placeReviews = reviews.filter((r) => r.placeID === placeId);
//         const reviewIds = placeReviews.map((r) => r.userID);
//
//         let userForReviews = [];
//         for(let i =0; i < reviewIds.length; i++){
//             let user;
//             let userlo = users.filter(u => u.id === reviewIds[i]);
//             user = userlo[0];
//             userForReviews.push(user);
//         }
//
//
//         return([placeReviews, userForReviews]);
//
// }
//
// export default GetPlaceReviews;