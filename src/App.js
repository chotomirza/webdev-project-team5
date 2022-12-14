//omdb section
// import Movies from "./omdb/movies";
// import moviesReducer from "./omdb/movies/movies-reducer";
import omdbReducer from "./omdb/omdb/omdb-reducer"
import OmdbSearch from "./omdb/omdb/omdb-search";
// import {likesReducer} from "./omdb/likes/likes-reducer";
import likesReducer from "./likes/likes-reducer"
import collectReducer from "./likes/likes-reducer";
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
import followsReducer from "./follows/follows-reducer"


import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./home";
import Search from "./search";
import EditProfile from "./profile/edit-profile";
import StaticProfile from "./profile/static-profile/index";
import Saved from "./saved/index.js";
import Signup from "./login/signup";
import Admin from "./admin";
import AdminUsers from "./admin/admin-users";
import AdminReviews from "./admin/admin-reviews";
import reviewsReducer from "./reducers/reviews-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
// import placesReducer from "./reducers/places-reducer";
import savesReducer from "./reducers/saves-reducer";
// import usersReducer from "./reducers/users-reducer";
import usersReducer from "./omdb/users/users-reducer"
import DisplayUserPublic from "./profile/generic-user/display-user-public";
import DrinkDetails from "./search/drink-details"

// newly added
import CurrentUser from "./omdb/users/current-user";
// todo: implement all the navigation stuff within navigation sidebar
// then remove navigation
// import Navigation from "./navigation";

import ProtectedRoute from "./omdb/users/protected-route";
import Users from "./omdb/users/index";
import Register from "./omdb/users/register";
import Profile from "./omdb/users/profile";
import Login from "./omdb/users/login"
import UsersPage from "./users";
import PublicProfile from "./omdb/users/public-profile";
import ProfileEdit from "./omdb/users/editProfile";


const store = configureStore(
    {reducer: {
                reviews: reviewsReducer,
               // plac
            // es: placesReducer,
               saves: savesReducer,
               users: usersReducer,
            likes: likesReducer,

                        //omdb
                       // movies: moviesReducer,
                       omdb: omdbReducer,

                       // reviews: reviewsReducer,
                       follows: followsReducer
               }}
)

function App() {






    return (
        <Provider store={store}>
            <BrowserRouter>
                {/*added currentuser here*/}
                <CurrentUser>
                    {/*<Navigation/>*/}

                <div className={"App container orr"}>
                    <Routes>
                        <Route path={'/*'} element={<Home user={null}/>}/>
                        {/*<Route path={"details/:placeId"} element={<OmdbDetails/>}/>*/}
                        {/*<Route path={"details/:placeId"} element={<PlacePage user={admin}/>}/>*/}
                        <Route path={"details/:placeId"} element={<DrinkDetails/>}/>
                        <Route path={"profile/:uid"} element={<PublicProfile/>}/>
                        <Route path={"/saved"} element={<Saved user={null}/>}/>
                        <Route path={"/search"} element={<Search/>}/>
                        <Route path={"/users"} element={<Users/>}/>
                        {/*commented the line below*/}
                        {/*<Route path={"/profile"} element={<StaticProfile user={admin}/>}/>*/}
                        <Route path={"/profile/edit"} element={<ProfileEdit/>}/>
                        <Route path={"/signup"} element={<Register/>}/>
                        <Route path={"/log"} element={<Login/>}/>
                        <Route path={"/register"} element={<Register/>}/>

                        <Route path={"/admin"} element={<Admin/>}/>
                        <Route path={"/admin/users"} element={<AdminUsers/>}/>
                        <Route path={"/admin/reviews"} element={<AdminReviews/>}/>
                        <Route path={"/omdb/search"} element={<OmdbSearch/>}/>

                    {/*    newly added */}
                        <Route path="/users" element={
                            <ProtectedRoute>
                                <Users/>
                            </ProtectedRoute>
                        }/>

                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/profile" element={
                            <ProtectedRoute>
                                <Profile/>
                            </ProtectedRoute>
                        }/>


                    </Routes>
                </div>

                </CurrentUser>

            </BrowserRouter>
        </Provider>

    );
}

export default App;
