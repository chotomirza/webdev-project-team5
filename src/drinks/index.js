import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createDrinksThunk, deleteDrinkThunk, findAllDrinksThunk} from "./drinks-thunks";
import {userLikesDrinkThunk} from "../likes/likes-thunks";

const Drinks = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {drinks} = useSelector((state) => state.drinks)
    const [drink, setDrink] = useState({title: 'New Drink'})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllDrinksThunk())
    }, [])
    return(
        <>
            <h1>Drinks</h1>
            {
                currentUser &&
                <h2>Welcome {currentUser.username} </h2>
            }
            <ul className="list-group">
                <li className="list-group-item">
                    <button className="btn btn-success float-end" onClick={() => {
                        dispatch(createDrinksThunk(
                            {
                                title: drink.title
                            }
                        ))
                    }}>Create</button>
                    <input
                        className="form-control w-75"
                        onChange={(e) =>
                            setDrink({...drink, title: e.target.value})}
                        value={drink.title}/>
                </li>
                {
                    drinks.map((drink) =>
                        <li className="list-group-item"
                            key={drink._id}>
                            <i onClick={() => {
                                dispatch(deleteDrinkThunk(drink._id))
                            }}
                               className="bi bi-trash float-end"></i>

                            <i onClick={() => {
                                dispatch(userLikesDrinkThunk({
                                    uid: 111, mid: drink._id//imdbID
                                }))
                            }} className="float-end bi bi-hand-thumbs-up me-2"></i>
                            <i className="float-end bi bi-hand-thumbs-down me-2"></i>


                            {drink.title}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Drinks;