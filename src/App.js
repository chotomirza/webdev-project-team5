//omdb section
// import Movies from "./omdb/movies";
// import moviesReducer from "./omdb/movies/movies-reducer";
import omdbReducer from "./omdb/omdb/omdb-reducer";
import OmdbSearch from "./omdb/omdb/omdb-search";
import {likesReducer} from "./omdb/likes/likes-reducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import Navigation from "./omdb/navigation";
// import Users from "./omdb/users";
// import Register from "./omdb/users/register";
// import CurrentUser from "./omdb/users/current-user";
// import Profile from "./omdb/users/profile";
// import ProtectedRoute from "./omdb/users/protected-route";
// import OmdbDetails from "./omdb/omdb/omdb-details";
// import PublicProfile from "./omdb/users/public-profile";
import followsReducer from "./omdb/follows/follows-reducer";


import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./home";
import Search from "./search";
import EditProfile from "./profile/edit-profile";
import StaticProfile from "./profile/static-profile/index";
import Saved from "./saved/index.js";
import Signup from "./login/signup";
import Login from "./login";
import Admin from "./admin";
import AdminUsers from "./admin/admin-users";
import AdminReviews from "./admin/admin-reviews";
import reviewsReducer from "./reducers/reviews-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
// import placesReducer from "./reducers/places-reducer";
import savesReducer from "./reducers/saves-reducer";
import usersReducer from "./reducers/users-reducer";
import DisplayUserPublic from "./profile/generic-user/display-user-public";
import DrinkDetails from "./search/drink-details"


const store = configureStore(
    {reducer: {
                reviews: reviewsReducer,
               // places: placesReducer,
               saves: savesReducer,
               users: usersReducer,

                        //omdb
                       // movies: moviesReducer,
                       omdb: omdbReducer,
                       likes: likesReducer,
                       // reviews: reviewsReducer,
                       follows: followsReducer
               }}
)

function App() {
    // const user = {
    //     "id": 1,
    //     "name": "John Doe",
    //     "dob": "2001-11-11",
    //     "username": "jdoe",
    //     "password": "password",
    //     "email": "jdoe@gmail.com",
    //     "bio": "Hi! my name is john and I love x and y",
    //     "admin": false
    // }

    const admin = {
        "id": 2,
        "name": "Jane Dob",
        "dob": "1999-09-09",
        "username": "dob-jane",
        "password": "password",
        "email": "jane1@gmail.com",
        "bio": "Hi! my name is jane and I love x and y",
        "admin": true
    }

    const userOut = null;

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className={"App container orr"}>
                    <Routes>
                        <Route path={'/*'} element={<Home user={userOut}/>}/>
                        {/*<Route path={"details/:placeId"} element={<OmdbDetails/>}/>*/}
                        {/*<Route path={"details/:placeId"} element={<PlacePage user={admin}/>}/>*/}
                        <Route path={"details/:placeId"} element={<DrinkDetails/>}/>
                        <Route path={"profile/:user"} element={<DisplayUserPublic/>}/>
                        <Route path={"/saved"} element={<Saved user={userOut}/>}/>
                        <Route path={"/search"} element={<Search/>}/>
                        <Route path={"/profile"} element={<StaticProfile user={admin}/>}/>
                        <Route path={"/profile/edit"} element={<EditProfile/>}/>
                        <Route path={"/signup"} element={<Signup/>}/>
                        <Route path={"/log"} element={<Login/>}/>
                        <Route path={"/admin"} element={<Admin/>}/>
                        <Route path={"/admin/users"} element={<AdminUsers/>}/>
                        <Route path={"/admin/reviews"} element={<AdminReviews/>}/>
                        <Route path={"/omdb/search"} element={<OmdbSearch/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>

    );
}

export default App;
