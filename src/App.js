import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./home";
import Search from "./search";
function App() {
  return (

      <BrowserRouter>
        <div className={"App container"}>
          <Routes>
            <Route path={'/*'} element={<Home/>}/>
             <Route path={"/search"} element={<Search/>}/>
          </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
