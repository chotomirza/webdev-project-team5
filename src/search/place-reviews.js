import PlaceReview from "./place-review";

const  PlaceReviews = (reviewAndUser) => {

    reviewAndUser = Array(reviewAndUser)[0].loru;


    let lou = reviewAndUser[1];

    let lor = reviewAndUser[0];




     let loru = [];

     for(let i = 0; i < lor.length; i ++){

         let r = lor[i];
         let u = lou[i];
         loru.push([r, u]);

     }




     return(
         <div>
              {
                   loru.map(ru => <PlaceReview ru={ru}/>)
              }
         </div>
     )

}

export default PlaceReviews;