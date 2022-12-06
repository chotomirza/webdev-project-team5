import {useNavigate, useParams} from "react-router";
import places from "../data/place.json"
import NavigationSidebar from "../navigation-sidebar";
import React from "react";
import {FaStar} from "react-icons/fa";
import GetPlaceReviews from "./reviews-for-place";
import PlaceReviews from "./place-reviews";


const findPlace = (placeId) => {
   console.log(placeId)
   const found = places.filter(p => p.id === placeId);

   if (found.length == 0){
      return(null);
   }
   else{
      return(found[0]);
   }
}

function PlacePage({user}) {
   let placeId = useParams().placeId;
   placeId = Number(placeId);

   const place = findPlace(Number(placeId));
    let navigate = useNavigate();

    const routeChange = () => {
        let path=`../write/`+placeId;
        navigate(path);
    }

   let reviewAndUser;
   let reviews;
   let users;
   if(! (place === null)){
       console.log("find reviews")
       reviewAndUser = GetPlaceReviews(place.id);
       reviews = reviewAndUser[0];
       users = reviewAndUser[1];



   }


   if(place === null){
      return(
          <div className="mt-3 row">
             <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={'search'}/>
             </div>


             <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">
                <h1 className={"text-success"}>Place Not Found </h1>
             </div>
          </div>

      );}
      else{

       return(
           <div className="mt-3 row">
               <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                   <NavigationSidebar active={'search'}/>
               </div>


               <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">
                   <h1 className={"text-info display-1"}>{place.name}</h1>
                    <hr/>
                   <span className={"display-7"}>{place.address}</span>
                    <hr/>
                   <span className={""}>{place.description}</span>
                   <hr/>
                   <h3 className={"text-success"}>Rating & Reviews:</h3>
                   <h5><FaStar className={"display-6 text-warning"}/>{place.rating}</h5>
                   <div className={"row"}>

                       <PlaceReviews loru={reviewAndUser}/>

                   </div>
                   <button type={"button"} onClick={routeChange} className={"col-3 btn me-5 btn-outline-success"}>Write Review</button>

               </div>
           </div>

       );
       }

}

export default PlacePage