import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findDrinkByDrinkIdThunk} from "./omdb-thunks";
import {createReviewThunk, findReviewsByDrinkThunk} from "../reviews/reviews-thunks";
import {Link} from "react-router-dom";

const OmdbDetails = () => {
    const {imdbID} = useParams()
    const [review, setReview] = useState('')
    const {reviews} = useSelector((state) => state.reviews)
    const {details} = useSelector((state) => state.omdb)

    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findDrinkByDrinkIdThunk(drinkID))
        dispatch(findReviewsByDrinkThunk(drinkID))
    },[])
    const handlePostReviewBtn = () => {
        dispatch(createReviewThunk({
            review,
            imdbID
        }))
    }
    return(
        <>
            {/*<h1>{details.Title}</h1>*/}
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

            {
            currentUser &&                <div>
                    <textarea
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control"></textarea><button onClick={handlePostReviewBtn}>Post Review</button></div>}
            <ul className="list-group">{
                reviews.map((review) =>                        <li className="list-group-item">{review.review}
                    <Link to={`/profile/${review.author._id}`} className="float-end">{review.author.username}
                    </Link></li>)
            }
            </ul>

            <pre>{JSON.stringify(details, null, 2)}
      </pre></>
    )
}
export default OmdbDetails