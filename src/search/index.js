import React from 'react';
import NavigationSidebar from "../navigation-sidebar";
import ResultsList from "./results/results-list";
import "./index.css";
import {FaSearch} from "react-icons/fa";


const Search = () => {
    return (


            <div className="mt-3 row">
                <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={"search"}/>
                </div>


                <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">

                    <h3 className="mb-3">What are you looking for?</h3>
                    <div className="input-group override mb-3">
                        <span className="input-group-text orr"><FaSearch/></span>
                        <input id='search-bar' type="text" className="form-control override"
                               placeholder="Search for places and activities"/>
                    </div>

                    <h5 className="text-secondary ">Results...</h5>
                    <ResultsList/>
            </div>
        </div>

    );


};

export default Search;