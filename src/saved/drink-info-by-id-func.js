import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findDrinkByDrinkIdThunk} from "../omdb/omdb/omdb-thunks";


// let myid = "178347";

const GetDrinkInfoById = (myid) => {
    const [searchTerm] = useState(myid.myid)
    const {movies, loading} = useSelector((state) => state.omdb)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findDrinkByDrinkIdThunk(searchTerm))
    }, [])

    if (loading){
        return <h4>Loading...</h4>
    }

    return (
            <div className="text-center col-xl-8 col-lg-9 col-md-9 col-sm-9">
                <a className="button" href={"/details/" + movies.idDrink}>
                {/*<div className={"card pt-2 col-sm-5 col-md-4 bg-transparent"}>*/}
                    <h6>{movies.idDrink}</h6>
                    <h4>{movies.strDrink}</h4>
                    {/*<a className="button" href={"/details/" + movies.idDrink}>*/}
                        {/*<button>*/}
                        {/*    learn more*/}
                        {/*</button>*/}
                    {/*</a>*/}
                    <div className={"card-body"}>
                        <div className={"row row-description"}>
                            <hr/>
                            <img src={movies.strDrinkThumb} alt="#" width="100%"/>
                        </div>
                    </div>
                {/*</div>*/}
                </a>
         </div>

    );


};

export default GetDrinkInfoById;