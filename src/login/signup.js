import EnterInfo from "../profile/edit-profile/enter-info";
import NavigationSidebar from "../navigation-sidebar";
import Login from "./index";
import React from "react";
import {useNavigate} from "react-router";

function Signup(){
    const user = {
        "id": new Date().getDate() + Math.random(),
        "name": "",
        "dob": "",
        "username": "",
        "password": "",
        "email": "",
        "bio": ""
    }
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `../profile`;
        navigate(path);
    }
    const {currentUser} = useSelector((state) => state.users)
        const [username, setUsername] = useState('alice')
        const [password, setPassword] = useState('alice1234')
        const dispatch = useDispatch()
        const handleRegisterBtn = () => {
            dispatch(registerThunk({username, password}))
        }

        if(currentUser) {
            return (<Navigate to={'/profile'}/>)
        }

    return(
        <div className="mt-3 row">
            <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                <NavigationSidebar active={'saved'}/>
            </div>


            <div id='center_section' className="text-left col-xl-8 col-lg-9 col-md-9 col-sm-9">
                <h1 className={"text-info"}>Hey! We're exited to have you</h1>
            Fill in the information below to create an account
            <br/>
            <br/>
            <EnterInfo user={user}/>

                <button type={"button"} onClick={routeChange}className={" btn btn-link text-success"} >Save</button>


            </div>
        </div>

    )
}

export default Signup;