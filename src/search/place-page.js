import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findDrinkByDrinkIdThunk} from "../omdb/omdb/omdb-thunks";

const PlacePage = () => {
    const placeID = useParams().placeId
    const {details} = useSelector((state) => state.omdb)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findDrinkByDrinkIdThunk(placeID))
    },[])


    const one = {};
    const two = JSON.stringify(details, null, 2);

    if (JSON.stringify(one) === two) {
    return <>Loading...</>
            }
            else {
    return (
        <div className="row">
            <div className="col">
                <ul className="list-group">
                    <li className="list-group-item">Category: {details.drinks["0"].strCategory}</li>
                    <li className="list-group-item">Instruction: {details.drinks["0"].strInstructions}</li>
                </ul>
            </div>
            <div className="col">
                <img src={details.drinks["0"].strDrinkThumb}/>
            </div>
        </div>
    )
            }

}
export default PlacePage