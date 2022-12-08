// import {useNavigate, useParams} from "react-router";
// import places from "../data/place.json"
// import NavigationSidebar from "../navigation-sidebar";
// import React from "react";
// import {FaStar} from "react-icons/fa";
// import GetPlaceReviews from "./reviews-for-place";
// import PlaceReviews from "./place-reviews";
//
//
// const findPlace = (placeId) => {
//    console.log(placeId)
//    const found = places.filter(p => p.id === placeId);
//
//    if (found.length == 0){
//       return(null);
//    }
//    else{
//       return(found[0]);
//    }
// }
//
// function PlacePage({user}) {
//    let placeId = useParams().placeId;
//    placeId = Number(placeId);
//
//    const place = findPlace(Number(placeId));
//     let navigate = useNavigate();
//
//     const routeChange = () => {
//         let path=`../write/`+placeId;
//         navigate(path);
//     }
//
//    let reviewAndUser;
//    let reviews;
//    let users;
//    if(! (place === null)){
//        console.log("find reviews")
//        reviewAndUser = GetPlaceReviews(place.id);
//        reviews = reviewAndUser[0];
//        users = reviewAndUser[1];
//
//
//
//    }
//
//
//    if(place === null){
//       return(
//           <div className="mt-3 row">
//              <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
//                 <NavigationSidebar active={'search'}/>
//              </div>
//
//
//              <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">
//                 <h1 className={"text-success"}>Place Not Found </h1>
//              </div>
//           </div>
//
//       );}
//       else{
//
//        return(
//            <div className="mt-3 row">
//                <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
//                    <NavigationSidebar active={'search'}/>
//                </div>
//
//
//
//                <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">
//                    <h1 className={"text-info display-1"}>{place.name}</h1>
//                     <hr/>
//                    <span className={"display-7"}>{place.address}</span>
//                     <hr/>
//                    <span className={""}>{place.description}</span>
//                    <hr/>
//                    <h3 className={"text-success"}>Rating & Reviews:</h3>
//                    <h5><FaStar className={"display-6 text-warning"}/>{place.rating}</h5>
//                    <div className={"row"}>
//
//                        <PlaceReviews loru={reviewAndUser}/>
//
//                    </div>
//                    <button type={"button"} onClick={routeChange} className={"col-3 btn me-5 btn-outline-success"}>Write Review</button>
//
//                </div>
//            </div>
//
//        );
//        }
//
// }
//
// export default PlacePage


// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findMovieByImdbIdThunk} from "../omdb/omdb/omdb-thunks";
// import {createReviewThunk, findReviewsByMovieThunk} from "../omdb/reviews/reviews-thunks";
// import {Link} from "react-router-dom";

const PlacePage = () => {
    const placeID = useParams()

    // console.log("Pre-Testing");
    // console.log(useParams())

    // console.log("OurID")
    const ourID = (Object.values(placeID)[0])
    // console.log(typeof ourID) // string

    // const [review, setReview] = useState('')
    // const {reviews} = useSelector((state) => state.reviews)
    const {details} = useSelector((state) => state.omdb)
    // console.log("0")
    // console.log(useSelector((state) => state.omdb))

    // const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findMovieByImdbIdThunk(placeID))
        // dispatch(findReviewsByMovieThunk(placeID))
    },[])
    // const handlePostReviewBtn = () => {
    //     dispatch(createReviewThunk({
    //         review,
    //         placeID
    //     }))
    // }
    return(
        <>
            {/*{console.log("Testing")}*/}
            {/*{console.log("1")}*/}
            {/*{console.log(typeof details)}*/}
            {/*{console.log(typeof details.drinks)}*/}

            {/*{console.log("2")}*/}
            {/*{console.log(typeof placeID)}*/}
            {/*{console.log(placeID.placeId)}*/}






            <h1>{details.Title}</h1>
            {/*{console.log("1")}*/}
            {/*<h1>{console.log(details.drinks)}</h1>*/}
            {/*<h1>{details.drinks["0"].strDrink}</h1>*/}
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        {/*<li className="list-group-item">Category: {details.drinks["0"].strCategory}</li>*/}
                        {/*<li className="list-group-item">Instruction: {details.drinks["0"].strInstructions}</li>*/}
                    </ul>
                </div>
                <div className="col">
                    {/*<img src={details.drinks["0"].strDrinkThumb}/>*/}
                </div>
            </div>

            {/*{*/}
            {/*currentUser &&                <div>*/}
            {/*        <textarea*/}
            {/*            onChange={(e) => setReview(e.target.value)}*/}
            {/*            className="form-control"></textarea><button onClick={handlePostReviewBtn}>Post Review</button></div>}*/}

            {/*<ul className="list-group">{*/}
            {/*    reviews.map((review) =>                        */}
            {/*        <li className="list-group-item">{review.review}*/}
            {/*        <Link to={`/profile/${review.author._id}`} className="float-end">{review.author.username}</Link>*/}
            {/*        </li>*/}
            {/*    )*/}
            {/*}*/}
            {/*</ul>*/}

            
    <pre>{JSON.stringify(details, null, 2)}</pre>
</>
    )
}
export default PlacePage