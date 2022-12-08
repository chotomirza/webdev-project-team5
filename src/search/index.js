import React from 'react';
import NavigationSidebar from "../navigation-sidebar";
import ResultsList from "./results/results-list";
import "./index.css";
import {FaSearch} from "react-icons/fa";

import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findMovieBySearchTermThunk} from "../omdb/omdb/omdb-thunks";
import {userLikesMovieThunk} from "../omdb/likes/likes-thunks";
import {Link} from "react-router-dom";


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('Vodka')
    const {movies, loading} = useSelector((state) => state.omdb)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findMovieBySearchTermThunk(searchTerm))
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
                                               dispatch(findMovieBySearchTermThunk(searchTerm))
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
                                       movies && movies.map((movie) =>
                                           <li key={movie.idDrink} className="list-group-item">
                                               <i onClick={() => {
                                                   dispatch(userLikesMovieThunk({
                                                       uid: 111, mid: movie.idDrink
                                                   }))
                                               }} className="float-end bi bi-bookmark me-2"></i>
                                               <i className="float-end bi bi-bookmark-fill me-2"></i>
                                               <img src={movie.strDrinkThumb} height={100} className="float-start"/>
                                               <Link to={`/details/${movie.idDrink}`} className="text-dark display-9 text-decoration-none float-start ms-4">
                                                   {movie.strDrink}
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