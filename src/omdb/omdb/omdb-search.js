import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findDrinkBySearchTermThunk} from "./omdb-thunks";
import {userLikesMovieThunk} from "../likes/likes-thunks";
import {Link} from "react-router-dom";

const OmdbSearch = () => {
    // const [searchTerm, setSearchTerm] = useState('Vodka')
    // const {movies, loading} = useSelector((state) => state.omdb)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(findDrinkBySearchTermThunk(searchTerm))
    // }, [])
    return (
        <>
            {/*<h1>Omdb Search</h1>*/}
            {/*<ul className="list-group">*/}
            {/*    <li className="list-group-item">*/}
            {/*        <button*/}
            {/*            className="btn btn-primary float-end"*/}
            {/*            onClick={() => {*/}
            {/*                dispatch(findDrinkBySearchTermThunk(searchTerm))*/}
            {/*            }}>Search*/}
            {/*        </button>*/}
            {/*        <input*/}
            {/*            className="form-control w-75"*/}
            {/*            onChange={(e) => {*/}
            {/*                setSearchTerm(e.target.value)*/}
            {/*            }}*/}
            {/*            value={searchTerm}/>*/}
            {/*    </li>*/}
            {/*    {*/}
            {/*        drinks && drinks.map((drink) =>*/}
            {/*            <li key={drink.idDrink} className="list-group-item">*/}
            {/*                <i onClick={() => {*/}
            {/*                    dispatch(userLikesMovieThunk({*/}
            {/*                        uid: 111, mid: drink.idDrink*/}
            {/*                    }))*/}
            {/*                }} className="float-end bi bi-hand-thumbs-up"></i>*/}
            {/*                <i className="float-end bi bi-hand-thumbs-down me-2"></i>*/}
            {/*                <img src={drink.strDrinkThumb} height={50}/>*/}
            {/*                <Link to={`/details/${drink.idDrink}`}>*/}
            {/*                    {drink.strDrink}*/}
            {/*                </Link>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    }*/}
            {/*</ul>*/}
            {/*<pre>*/}
            {/*    {JSON.stringify(movies, null, 2)}*/}
            {/*</pre>*/}
        </>
    )
}

export default OmdbSearch