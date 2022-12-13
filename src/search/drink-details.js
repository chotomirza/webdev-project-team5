import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {findDrinkByDrinkIdThunk} from "../omdb/omdb/omdb-thunks";
import {userLikesDrinkThunk} from "../likes/likes-thunks";
import NavigationSidebar from "../navigation-sidebar";
import {BiDrink} from "react-icons/bi"
import {FaHome} from "react-icons/fa";
// import {createReviewThunk} from "../omdb/reviews/reviews-thunks";

const DrinkDetails = () => {
    const placeID = useParams().placeId
    const {details} = useSelector((state) => state.omdb)
    const {currentUser} = useSelector((state) => state.users)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findDrinkByDrinkIdThunk(placeID))
    },[])

    const handleLikeBtn = () => {
        currentUser &&
        dispatch(userLikesDrinkThunk(
            {
                drinkId: details.drinks["0"].idDrink,
                uid: currentUser._id
            }
        ))
    }


    const one = {};
    const two = JSON.stringify(details, null, 2);

    if (JSON.stringify(one) === two) {
        return <>Loading...</>
    }
    else {
        return (

            <div className="row">
                <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                    <NavigationSidebar active={'search'}/>
                </div>



                <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">
                    <h1>{details.drinks["0"].strDrink}</h1>
                    <img src={details.drinks["0"].strDrinkThumb} width="40%" height="auto"/>

                    <div className="row pt-4 pb-4 ">
                        {/*<div className="col">*/}
                        {/*    <button type="button" className="btn btn-success">I tried making this (remove this)</button>*/}
                        {/*</div>*/}


                        <div className="col">
                            <button type="button" className="btn btn-warning" onClick={handleLikeBtn}>{
                                //dispatch(userLikesDrinkThunk())
                            }<BiDrink/>       C O L L E C T       <BiDrink/></button>
                        </div>

                        {/*<div className="col">*/}
                        {/*    <button type="button" className="btn btn-danger">Did not like it</button>*/}
                        {/*</div>*/}
                    </div>

                </div>

                <div className="row">
                    <ul className="list-group" style={{paddingBottom:'20px'}}>
                        <li className="list-group-item"><b>Category:</b> {details.drinks["0"].strCategory}</li>
                        <li className="list-group-item"><b>Instruction:</b> {details.drinks["0"].strInstructions}</li>
                    </ul>

                    <ul className="list-group"style={{paddingBottom:'20px'}}>
                        <h6><b>Top 3 Ingredients:</b></h6>
                        <li className="list-group-item">1: {details.drinks["0"].strIngredient1}</li>
                        <li className="list-group-item">2: {details.drinks["0"].strIngredient2}</li>
                        <li className="list-group-item">3: {details.drinks["0"].strIngredient3}</li>
                    </ul>
                </div>


                <div className="row">
                    <div>if claimed: This drink has been collected: @theUserWhoClickedThatButtonFirst</div>
                    <div>else: This drink is still up for grabs</div>
                    {/*<div>This drink has been liked by: [list of users]</div>*/}
                    {/*<div>This drink has been disliked by: [list of users]</div>*/}
                </div>




            </div>
        )
    }

}
export default DrinkDetails