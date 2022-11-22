import React from 'react';
import NavigationSidebar from "../navigation-sidebar";
import ResultsList from "./results/results-list";
import './index.css'


const Search = () => {
    return (
        <div class = 'container'>

            <div class="mt-3 row justify-content-center">
                <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active-={'search'}/>
             </div>
            <div id='center_section' class=" col-xl-7 col-lg-7 col-md-5 col-sm-8">

                    <h3 className="mb-3">What are you looking for?</h3>
                    <div className="input-group override mb-3">
                        <span className="input-group-text orr"><i className='fa fa-search'></i></span>
                        <input id='search-bar' type="text" className="form-control override"
                               placeholder="Search for places and activities"/>
                    </div>

                    <h5 className="text-secondary">Results...</h5>
                    <ResultsList/>
            </div>
        </div>
        </div>
    );


};

export default Search;