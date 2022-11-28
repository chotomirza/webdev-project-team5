import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./home";
import Search from "./search";
import EditProfile from "./profile/edit-profile";
import StaticProfile from "./profile/static-profile";
function App() {
  return (

      <BrowserRouter>
        <div className={"App container"}>
          <Routes>
            <Route path={'/*'} element={<Home/>}/>
             <Route path={"/search"} element={<Search/>}/>
              <Route path={"/profile"} element={<StaticProfile/>}/>
              <Route path={"/profile/edit"} element={<EditProfile/>}/>
          </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
