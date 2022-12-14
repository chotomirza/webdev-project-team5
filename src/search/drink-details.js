import {useNavigate, useParams} from "react-router";
import {BiSad} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {findDrinkByDrinkIdThunk} from "../omdb/omdb/omdb-thunks";
import {deleteLikeThunk, findLikesThunk, userLikesDrinkThunk} from "../likes/likes-thunks";
import NavigationSidebar from "../navigation-sidebar";
import {BiDrink} from "react-icons/bi"
import {findAllUsersThunk} from "../omdb/users/users-thunk";


const DrinkDetails = () => {
    const placeID = useParams().placeId
    const {details} = useSelector((state) => state.omdb)
    const {likes} = useSelector((state) => state.likes)
    const {users} = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(findLikesThunk())
        dispatch(findAllUsersThunk())
    })



    const {currentUser} = useSelector((state) => state.users)

    let loggedIn = !(currentUser == null)

    const isCollected = () => {

        let filteredC = likes.filter(like => like.drink == placeID);

        return filteredC
    }

    const deleteLikeHandler = () => {
        console.log("trying to delete")
        dispatch(deleteLikeThunk(placeID))
    }

    let isDrinkCollected = isCollected().length > 0
    let userCollected = null
    if(isDrinkCollected){
        const like = isCollected()[0]
        userCollected = like.user

    }
    const findUserCollected = () => {
        let usersF = users.filter((u) => u._id == userCollected)
        userCollected = usersF[0]
    }

     findUserCollected()








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

    let navigate = useNavigate();
    const routeLogin = () => {
        navigate(`../login`)
    }
    const routeChange = () => {
        if(userCollected !== null){
            navigate(`../profile/`+userCollected._id)
        }
    }


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


                    <h1>{details.strDrink}</h1>
                    <img src={details.strDrinkThumb} width="40%" height="auto"/>

                    {/*<h1>{details.drinks["0"].strDrink}</h1>*/}
                    {/*<img src={details.drinks["0"].strDrinkThumb} width="40%" height="auto"/>*/}

                    <div className="row pt-4 pb-4 ">
                        <div className="col">
                            {loggedIn && (isDrinkCollected || <button type="button" className="btn btn-warning" onClick={handleLikeBtn}>{
                                //dispatch(userLikesDrinkThunk())
                            }<BiDrink/>       C O L L E C T       <BiDrink/></button>)}
                            {loggedIn && isDrinkCollected && <div  className="text-light bg-danger">{
                                //dispatch(userLikesDrinkThunk())
                            }    THIS DRINK HAS ALREADY BEEN COLLECTED BY
                                <span className={"text-decoration-underline"} onClick={routeChange}>@{userCollected.username}</span>   <BiSad/></div>
                            }

                            {loggedIn || <button
                                onClick={routeLogin}
                                type={"button"}

                                className=" btn btn-transparent text-primary">
                                Please click here to login in order to follow users!
                            </button>}
                        </div>


                    </div>

                </div>

                <div className="row">
                    <ul className="list-group" style={{paddingBottom:'20px'}}>
                        <li className="list-group-item"><b>Category:</b> {details.strCategory}</li>
                        <li className="list-group-item"><b>Instruction:</b> {details.strInstructions}</li>
                        {/*<li className="list-group-item"><b>Category:</b> {details.drinks["0"].strCategory}</li>*/}
                        {/*<li className="list-group-item"><b>Instruction:</b> {details.drinks["0"].strInstructions}</li>*/}
                    </ul>

                    <ul className="list-group"style={{paddingBottom:'20px'}}>
                        <h6><b>Top 3 Ingredients:</b></h6>
                        {/*<li className="list-group-item">1: {details.drinks["0"].strIngredient1}</li>*/}
                        {/*<li className="list-group-item">2: {details.drinks["0"].strIngredient2}</li>*/}
                        {/*<li className="list-group-item">3: {details.drinks["0"].strIngredient3}</li>*/}
                        <li className="list-group-item">1: {details.strIngredient1}</li>
                        <li className="list-group-item">2: {details.strIngredient2}</li>
                        <li className="list-group-item">3: {details.strIngredient3}</li>
                    </ul>
                </div>




                {loggedIn && currentUser.role == "admin" && isDrinkCollected &&
                <button
                    onClick={deleteLikeHandler}
                    type={"button"}

                    className=" btn btn-outline text-danger">
                    UNCOLLECT DRINK
                </button>}




            </div>
        )
    }

}
export default DrinkDetails