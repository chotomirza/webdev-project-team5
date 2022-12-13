import NavigationSidebar from "../navigation-sidebar";
import React, {useEffect} from "react";
import SavedItemsAll from "../saved/saved-items-all";
import AllSavedPlaces from "../saved/all-saved-places";
import SomeSavedPlaces from "../saved/some-saved";
import GenericDrinksFunc from "../saved/generic-drinks-func";
import {TbCrown} from "react-icons/tb";
import {useDispatch, useSelector} from "react-redux";
import {findLikesByUser} from "../likes/likes-service";
import {useNavigate} from "react-router";

function PersonalizedHome() {
    const {currentUser} = useSelector((state) => state.users)


    if (currentUser) {
        return(
            <span className={"display-6"}>Welcome {currentUser.username}!</span>
        )
    } else {
        return(
                <span className={"display-6"}>Welcome!</span>
            )
    }

}

function Home() {

    const {currentUser} = useSelector((state) => state.users)
    const loggedIn = !(currentUser == null)

    let navigate = useNavigate();
    const routeLogin = () => {
        navigate(`../login`)
    }



        return(


            <div className="mt-3 row">




                <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                    <NavigationSidebar active={'home'}/>
                </div>


                <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">
                    {/*<h1 className={"display-1 text-success"}>Welcome!</h1>*/}
                    {/*<hr/>*/}

                    <h6 className={"display-5 text-success"}>Ready to make some <b><i>Pour Decisions</i></b>?</h6>

                    <hr/>
                    <p>Here you can search for recipes on your favorite cocktails!<br/>
                    <TbCrown/> Compete with other users to collect the most number of drinks! <TbCrown/></p>
                <hr/>
                    <PersonalizedHome/>

                    <h4 className={"display-6 text-info"}>Trending Drinks:</h4>
                    <div className={'row'}>
                        <GenericDrinksFunc/>
                        <GenericDrinksFunc/>
                        <GenericDrinksFunc/>
                    </div>
                    <div className={'row'}>
                        <GenericDrinksFunc/>
                        <GenericDrinksFunc/>
                        <GenericDrinksFunc/>
                    </div>

                    <br/>
                    <br/>


                    {loggedIn || <button
                        onClick={routeLogin}
                        type={"button"}

                        className=" btn btn-transparent text-primary">
                        Please click here to login in order to follow users!
                    </button>}
                </div>

            </div>
        );



}

export default Home;