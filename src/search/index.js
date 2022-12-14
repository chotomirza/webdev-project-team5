import React from 'react';
import NavigationSidebar from "../navigation-sidebar";
import ResultsList from "./results/results-list";
import "./index.css";
import {FaSearch} from "react-icons/fa";

import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findDrinkBySearchTermThunk} from "../omdb/omdb/omdb-thunks";
// import {userLikesMovieThunk} from "../omdb/likes/likes-thunks";
import {userLikesDrinkThunk} from "../likes/likes-thunks"
import {Link} from "react-router-dom";


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('Vodka')
    const {movies, loading} = useSelector((state) => state.omdb)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findDrinkBySearchTermThunk(searchTerm))
    }, [])
    return (
            <div className="mt-3 row">
                <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={"search"}/>
                </div>


                <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">

                    <h1 className="text-info mb-3">What are you looking for?</h1>
                   <ul className="list-group">
                                   <li className="list-group-item">
                                       <button
                                           className="btn btn-success float-end"
                                           onClick={() => {
                                               dispatch(findDrinkBySearchTermThunk(searchTerm))
                                           }}>Search
                                       </button>
                                       <input
                                           className="form-control w-75"
                                           onChange={(e) => {
                                               setSearchTerm(e.target.value)
                                           }}
                                           value={searchTerm}/>
                                   </li>
                                   {
                                       movies && movies.map((drink) =>
                                           <li key={drink.idDrink} className="list-group-item">
                                               <img src={drink.strDrinkThumb} height={50} className="float-start" alt={drink.strDrink}/>
                                               <Link to={`/details/${drink.idDrink}`} className="text-success float-start ms-4">
                                                   {drink.strDrink}
                                               </Link>



                                           </li>
                                       )
                                   }
                               </ul>
                               {/* <div className="input-group override mb-3">
                                                       <span className="input-group-text orr"><FaSearch/></span>
                                                       <input id='search-bar' type="text" className="form-control override"
                                                              placeholder="Search for places and activities"/>
                                                   </div>

                                                   <h5 className="text-secondary ">Results...</h5>
                                                   <ResultsList/> */}
            </div>
        </div>

    );


};

export default Search;