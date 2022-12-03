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
import DisplayUserPublic from "./profile/generic-user/display-user-public";
import PlacePage from "./search/place-page";




function App() {
    const user = {
        "id": 1,
            "name": "John Doe",
            "dob": "2001-11-11",
            "username": "jdoe",
            "password": "password",
            "email": "jdoe@gmail.com",
            "bio": "Hi! my name is john and I love x and y",
            "admin": false
    }

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

      <BrowserRouter>
        <div className={"App container orr"}>
          <Routes>
            <Route path={'/*'} element={<Home user={userOut}/>}/>
              <Route path={"details/:placeId"} element={<PlacePage user={admin}/>}/>
              <Route path={"profile/:user"} element={<DisplayUserPublic/>}/>
              <Route path={"/saved"} element={<Saved user={admin}/>}/>
             <Route path={"/search"} element={<Search/>}/>
              <Route path={"/profile"} element={<StaticProfile user={admin}/>}/>
              <Route path={"/profile/edit"} element={<EditProfile/>}/>
              <Route path={"/signup"} element={<Signup/>}/>
              <Route path={"/log"} element={<Login/>}/>
              <Route path={"/admin"} element={<Admin/>}/>
              <Route path={"/admin/users"} element={<AdminUsers/>}/>
              <Route path={"/admin/reviews"} element={<AdminReviews/>}/>

          </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
